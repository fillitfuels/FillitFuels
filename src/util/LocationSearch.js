import React from 'react';


import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {headerWidth, remainingWidth} from './CustomHeader.js';
import {key} from './keyinfo.js';

const searchRadius = 150; //radius around current location

const containerTop = 70;
const containerLeft = 30;

const textInputOffset = 10;


const LocationSearch = ({handlePress, latitude, longitude}) => {

    return (
        <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2}
            autoFocus={false}
            returnKeyType={'search'}
            listViewDisplayed='false'
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
                /*

                description: {
                    fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                    color: '#1faadb'
                },

                textInput: {
                    position: 'relative',
                    //center: headerWidth,
                    left: 30,
                    top: containerTop + textInputOffset,
                    //marginLeft: 50,

                    //paddingTop: 10,
                    //marginTop: 30,
                },
                listView: {
                    position: 'relative',
                    top: 500,
                    height: 200,
                },
                textInputContainer: {
                    position: 'relative',
                    width: remainingWidth,
                    //center: headerWidth,

                    //marginLeft: 32,
                    //paddingTop: 10,
                    //marginTop: 30,
                    //left: containerLeft,
                    //top: containerTop,

                },

                container: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: 'rgb(50,50,50)',
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    left: containerLeft,
                    top: containerTop,
                    width: remainingWidth,
                }
                */
                container: {
                    position: 'relative',
                    top: containerTop,
                    left: containerLeft,
                    width: '90%',
                    alignItems: 'center',
                    margin: 'auto',
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 5,
                },
                textInput: {
                    position: 'absolute',
                    width: '90%',
                    top: containerTop,
                    left: containerLeft+textInputOffset,
                },
                textInputContainer: {
                    //position: 'absolute',
                    width: '100%',
                },
                description: {
                    fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                    color: '#1faadb'
                },
                listView: {
                    position: 'absolute',
                    top: 40,
                    backgroundColor: '#C9C9CE',
                },

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


