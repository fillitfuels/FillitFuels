import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class GasPriceGrabber extends React.Component {
    //TODO: make the api specific logic separate?
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
        this.dev_url = 'https://www.gasbuddy.com/assets-v2/api/stations/';
        this.max_results = 20;
        this.per_page = 10;
    }

    returnResult(result){
        //simple return to test promises and .then out
        return result;
    }


    getRequestURLFromLocation(lat, long) {
        console.log('enter');
        //hard coding things for testing
        const url_components = [
            "lat=" + lat.toString(),
            "lng=" + long.toString(),
        ];

        let request_url =
            this.dev_url + '?' + url_components.join('&');

        return request_url;
    }

    getPricesFromStation(station_id){
        const url = this.dev_url + station_id.toString() + "/fuels";
        return fetch(url)
            .then(response => response.json())
            .then( responseJson => {
                let prices = {};
                for(fuelType of responseJson.fuels){
                    prices[fuelType.fuelType] = fuelType.prices[0].price;
                }
                return prices;
            })
            .catch( error => console.error(error));
    }


    getGasPrices(lat, long, cb) {
        let request_url = this.getRequestURLFromLocation(lat, long);
        let result = [];

        const formatResults = (entry) => {

            return this.getPricesFromStation(entry.id).then(prices =>{
                return {
                    lat: entry.latitude,
                    lng: entry.longitude,
                    station: entry.name,
                    prices: prices,
                };
            });
        };


        const getNextPages = (url, cursor, results) => {
            const request_url = url + "&cursor=" + cursor;

            fetch(request_url)
                .then(response => response.json())
                .then(responseJson => {

                    const diff = this.max_results - results.length;
                    if(diff <= 0) return results;
                    const max_stations = Math.min(diff, this.per_page);

                    for(let i=0; i<max_stations; i++){
                        const station = responseJson.stations[i];
                        results.push(formatResults(station));
                    }

                    if(results.length >= this.max_results){
                        Promise.all(results).then(resolvedResults => {
                            cb(resolvedResults);
                        });
                    }
                    getNextPages(url, responseJson.nextCursor, results);
                })
                .catch(error => {
                    console.error(error);
                });
        };


        getNextPages(request_url, 0, result);
    }

    //testing version
    /*
    getGasPrices(lat, long, cb){
      let stations = {
        stations: [
          {
            lat: lat+0.0333,
            lng: long+0.0333,
            station: 'Shell',
            reg_price: '3.99'
          },
          {
            lat: lat+0.01,
            lng: long-0.0333,
            station: 'Arco',
            reg_price: '4.20'
          },
          {
            lat: lat-0.0333,
            lng: long+0.023,
            station: 'Chevron',
            reg_price: '4.25'
          }
        ]
      };

      cb(stations);
    }
    */
    render() {
        return null;
    }
}
