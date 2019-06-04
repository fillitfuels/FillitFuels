import * as React from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';


import MapView from 'react-native-maps';
import {Marker, Circle, Overlay} from 'react-native-maps';
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import awsConfig from '../util/config.js';
import Header, {headerHeight} from '../util/CustomHeader.js';
import LocationSearch from '../util/LocationSearch.js';
import PlaceLocator from '../util/placeIdToLatLng.js';



//import { withAuthenticator } from "aws-amplify-react-native";
Amplify.configure(awsConfig);

// You can import from local files
import GasPriceGrabber from '../util/gas_prices';
import APIProxy from '../util/apiCommunication';
import ScheduleModal from '../util/scheduleModal';
import StationIcons from '../util/StationIcons.js';


export default class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            latlng:{
                latitude: 37.78825,
                longitude: -122.4324,
            },
            newLatLng:{
                latitude: 37.78825,
                longitude: -122.4324,
            },
            error: null,
            markers: [],
            radius: 4000,
            latDelta: 0.0922,
            longDelta: 0.0421,
            markerX: 0.05, //percentage of the screen the marker should take up
            markerY: 0.05,
            price: 0,
            showScheduleModal: false,
            adjustRegion: false,
        };

        this.gasPrices = new GasPriceGrabber();
        this.api = new APIProxy();
        this.placesLocation = new PlaceLocator();
        this.gasStations = new StationIcons();

    }

    getDate(datetime){
        //TODO: move to util, dont hardcode this (only here for testing purposes
        return datetime.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    getTime(datetime){
        //TODO: move to util, dont hardcode this
        return datetime.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    }

    createRequestBody(datetime, notes){
        return {
            Lat: this.state.latlng.latitude,
            Long: this.state.latlng.longitude,
            Time: this.getTime(datetime),
            Date: this.getDate(datetime),
            Price: 3.99, //TODO: implement best price algorithm
            Notes: notes ? notes : 'None',
        };
    }

    scheduleJobSuccess(responseJson){
        console.log("Success, response: ");
        console.log(responseJson);
    }

    scheduleJobFail(responseJson){
        console.log("Failed scheduling: ");
        //console.log(responseJson);

    }

    scheduleJobTime(datetime, notes){
        this.setState({
            showScheduleModal: false,
        });

        const rqBody = this.createRequestBody(datetime, notes);
        console.log("Scheduled");
        Auth.currentAuthenticatedUser()
            .then( (auth) => {
                console.log(auth);
                const idToken = auth.signInUserSession.idToken.jwtToken;
                this.api.requestServer( idToken,'schedule', rqBody,
                    (res) => {this.scheduleJobSuccess(res)},
                    (rej) => {this.scheduleJobFail(rej)
                    });
            })
            .catch( (rej) => {
                console.log(rej);
            });
    }

    getCoords(station){
        const lat = station.lat;
        const long = station.lng;
        let coords = [];

        for(let x = -1; x <= 1; x+= 2){
            for(let y = -1; y <= 1; y+= 2){
                coords.push({
                    latitude: lat + y * this.state.markerY * this.state.latDelta,
                    longitude: long + x * this.state.markerX * this.state.longDelta,
                });
            }
        }
        return coords;
    }

    fetchIcon(name){
        const lower_name = name.toLowerCase();

        const iconLocation = this.gasStations.getIconLocation(lower_name);
        return iconLocation;
    }

    requestGasPricesFromRegion(lat, long)
    {
        this.gasPrices.getGasPrices(lat, long, (responseJson) => {
            let markers = [];
            const stations = responseJson;
            for(let i=0; i<stations.length; i++){
                const station = stations[i];
                const icon = this.fetchIcon(station.station);
                let price = station.prices.Regular;

                if(!icon || price <= 0.1) continue;
                const marker = {
                    latlng: {
                        latitude: station.lat,
                        longitude: station.lng,
                    },
                    title: station.station,
                    description: price.toString(),
                    coords: this.getCoords(station),
                    icon: icon,
                };
                markers.push(marker);
            }

            this.setState({
                markers: markers,
                price: this.getBestPriceFromMarkers(),
            });

        });
    }


    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                this.setState({
                    latlng: {
                        latitude: lat,
                        longitude: long,
                    },
                    error: null
                });

                this.requestGasPricesFromRegion(lat, long);
            },
            (error) => this.setState({error: error.message}),
            {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000}
        );
    }

    getBestPriceFromMarkers(){
        const markers = this.state.markers;
        let lowestPrice = 10000; //arbitrary value that will never be lower than the lowest gas price (hopefully)
        for(let mark in markers) {
            const price = parseFloat(mark.description);
            if (price <= 0) continue; //TODO: sometimes the api returns 0 for the gas price, need more robust handling
            if (price < lowestPrice) lowestPrice = price;
        }

        this.setState({
            price: lowestPrice,
        });
    }

    handleRegionChange(region)
    {
        //can do checking and only allow re-pulling of gas stations on movement of x miles away from original pull
        if(!region || !region.latitude || !region.longitude) return;
        this.setState({
            regionChanged: true,
            newLatLng: {
                latitude: region.latitude,
                longitude: region.longitude,
            },

        });
    }

    handleSearchNewRegion()
    {
        //this function is only called when state.regionChanged is true
        this.requestGasPricesFromRegion(this.state.newLatLng.latitude, this.state.newLatLng.longitude);
        this.setState( {
            regionChanged: false,
        })
    }

    handleLocationSelected(data){
        //TODO: error handling
        const placesId = data.place_id;
        this.placesLocation.searchLocation(placesId, (latlng) => {

            this.handleRegionChange(latlng);
            this.setState({
                adjustRegion: true,
            });
        })
    }

    render() {
        const adjustRegion = this.state.adjustRegion;
        if (adjustRegion) this.setState({adjustRegion: false});

        return (
            <View style={styles.container}>


                {this.state.showScheduleModal && (
                    <ScheduleModal
                        handleConfirm={(datetime, notes) => this.scheduleJobTime(datetime, notes)}
                        visible={true}
                    />
                )}

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: this.state.latlng.latitude,
                        longitude: this.state.latlng.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    region={this.state.adjustRegion ?
                        {
                        latitude: this.state.newLatLng.latitude,
                        longitude: this.state.newLatLng.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }: undefined}
                    showsUserLocation={true}
                    onRegionChangeComplete={(region) => this.handleRegionChange(region)}
                >
                    <View>

                        <Header navigation={this.props.navigation}/>
                        <LocationSearch
                            handlePress={(data) => this.handleLocationSelected(data)}
                            latitude={this.state.latlng.latitude}
                            longitude={this.state.latlng.longitude}
                        />
                    </View>

                    <Circle
                        //TODO: update latlng on user location change
                        center={this.state.newLatLng}
                        radius={this.state.radius}
                    >

                    </Circle>
                    {this.state.markers.map( marker => (
                        <Marker coordinate={marker.latlng}
                                title={marker.title}>
                            <View style={styles.marker}>
                                <Image
                                    source={marker.icon}
                                    style={{
                                        //flex: 1,
                                        width: 25,
                                        height: 25,
                                    }}
                                    resizeMode="contain"

                                />
                                <Text
                                    style={{
                                        top: 4,
                                        paddingLeft: 8,
                                        color: 'rgb(255,255,255)',
                                        fontWeight: '900',
                                    }}
                                >{marker.description}</Text>
                            </View>
                        </Marker>
                    ))}
                </MapView>
                <View
                    style={styles.buttonContainer}
                >
                    <TouchableOpacity
                        style={[styles.bubble, styles.button]}
                        onPress={() => this.setState({
                            showScheduleModal:true,
                        })}
                    >
                        <Text>Schedule a time</Text>
                    </TouchableOpacity>
                    {this.state.regionChanged && (
                        <TouchableOpacity
                            style={[styles.bubble, styles.button]}
                            onPress={() => this.handleSearchNewRegion()}
                        >
                            <Text>Search in this Region</Text>
                        </TouchableOpacity>
                    )}

                </View>


            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        flex:1,
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        //top: headerHeight,
        top: 0,

    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    button: {
        width: 180,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },

    marker: {
        flex: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: 'rgb(34,139,34)',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 3,
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1,
    },
    search: {
        top: 200,
    }

});

