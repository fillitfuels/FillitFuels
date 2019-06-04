import React from 'react';


import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {headerWidth, remainingWidth} from './CustomHeader.js';
import {key} from './keyinfo.js';

const searchRadius = 150; //radius around current location

const containerTop = 70;
const containerLeft = 50;

const textInputOffset = -23;


const LocationSearch = ({handlePress, latitude, longitude}) => {

    return (
        <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2}
            autoFocus={false}
            returnKeyType={'search'}
            listViewDisplayed='true'
            fetchDetails={true}
            renderDescription={row => row.description}
            onPress={(data, details=null) => {
                handlePress(data);
            }}

            getDefaultValue={()=>''}
            query={{
                key: key,
                language: 'en',
                //locationbias: 'circle:'+searchRadius+'@' + latitude + ',' + longitude,
                location: latitude + ',' + longitude,
                radius: searchRadius,
                fields: 'geometry/location',
            }}

            styles={{

                textInputContainer: {
                    width: remainingWidth,
                    //center: headerWidth,

                    //marginLeft: 32,
                    //paddingTop: 10,
                    //marginTop: 30,
                    left: containerLeft,
                    top: containerTop,

                },
                textInput: {
                    //center: headerWidth,
                    left: 30,
                    top: containerTop + textInputOffset,
                    //marginLeft: 50,

                    //paddingTop: 10,
                    //marginTop: 30,
                },
                description: {
                    fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                    color: '#1faadb'
                },
                listView: {
                    //height: 100,
                },
                container: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    //center: headerWidth,
                    alignItems: 'center',
                    justifyContent: 'center',
                    left: containerLeft,
                    top: containerTop,
                }
            }}

            currentLocation={true}
            currentLocationLabel="Current location"
            //nearbyPlacesAPI='GoogleReverseGeocoding'
            nearbyPlacesAPI='GooglePlacesSearch'
            GoogleReverseGeocodingQuery={{

            }}
            GooglePlacesSearchQuery={{

            }}
            GooglePlacesDetailsQuery={{
                fields: 'formatted_address',
            }}

        >


        </GooglePlacesAutocomplete>
    );
};


export default LocationSearch;


