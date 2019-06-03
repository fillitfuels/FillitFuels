import React from 'react';


import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {headerWidth, remainingWidth} from './CustomHeader.js';

const searchRadius = 15000; //radius around current location


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
                key: 'AIzaSyDdjK9u_nT38yMAOUPlQ3HLhN3TphJ0Tak',
                language: 'en',
                //locationbias: 'circle:'+searchRadius+'@' + latitude + ',' + longitude,
                location: latitude + ',' + longitude,
                radius: searchRadius,
                fields: 'geometry/location',
            }}

            styles={{
                textInputContainer: {
                    width: remainingWidth,
                    left: headerWidth,
                },
                textInput: {
                    left: headerWidth,
                },
                description: {
                    fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                    color: '#1faadb'
                },
                listView: {
                    flex: 1,
                    height: 100,
                },
                container: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    left: headerWidth,
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


