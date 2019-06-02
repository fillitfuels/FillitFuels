import React from 'react';


import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {headerWidth, remainingWidth} from './CustomHeader.js';



const LocationSearch = () => {

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
                console.log(data, details);
            }}

            getDefaultValue={()=>''}
            query={{
                key: 'AIzaSyDdjK9u_nT38yMAOUPlQ3HLhN3TphJ0Tak',
                language: 'en',
                types: '(cities)'
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
            nearbyPlacesAPI='GoogleReverseGeocoding'
            GoogleReverseGeocodingQuery={{

            }}
            GooglePlacesSearchQuery={{
                rankby: 'distance'
            }}
            GooglePlacesDetailsQuery={{
                fields: 'formatted_address',
            }}

        >


        </GooglePlacesAutocomplete>
    );
};


export default LocationSearch;


