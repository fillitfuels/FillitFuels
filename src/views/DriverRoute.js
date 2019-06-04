import React from 'react';

import MapView, {Marker} from 'react-native-maps';
import { Text, View} from "react-native";


export default class DriverRoute extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            latlng:{
                latitude: 33.6405,
                longitude: -117.8443,
            },
            driver: {
                latitude: 33.620916,
                longitude: -117.873221,
            },
        };
    }

    updateMarker(){

    }

    render() {
        return (
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: this.state.latlng.latitude,
                    longitude: this.state.latlng.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                <Marker
                    coordinate={this.state.driver}
                >
                    <View style={styles.marker}>
                        <Text
                            style={{
                                top: 4,
                                paddingLeft: 8,
                                color: 'rgb(255,255,255)',
                                fontWeight: '900',
                            }}
                        >Your Driver</Text>
                    </View>
                </Marker>


            </MapView>
        );
    }
}

const styles = {
    map: {
        flex:1,
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        //top: headerHeight,
        top: 0,

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
};