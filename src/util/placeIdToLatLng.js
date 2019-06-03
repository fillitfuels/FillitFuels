

import React from 'react';

import {key} from './keyinfo.js';
import Qs from 'qs';



export default class PlaceLocator extends React.Component {

    placesUrl = 'https://maps.googleapis.com/maps/api/place/details/json?';

    searchLocation(placeId, cb){
        let url = this.placesUrl + Qs.stringify({
            key: key,
            placeid: placeId,
            fields: 'geometry/location',
        })

        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                const lat = responseJson['result']['geometry']['location']['lat'];
                const lng = responseJson['result']['geometry']['location']['lng'];
                cb({
                    latitude: lat,
                    longitude: lng,
                });
            })
            .catch(err => {console.log(err);});
    }

    render(){
        return null;
    }
}