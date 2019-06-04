import React from 'react';



export default class Stationicons extends React.Component {

    stations = {
        shell: '../assets/Pictures/shell.png',
        '76': '../assets/Pictures/76.svg',
        arco: '../assets/Pictures/arco.png',
    };


    getIconLocation(station_name){
        if (this.stations.hasOwnProperty(station_name)) {
            return this.stations[station_name];
        }
        return null;
    }

    render(){
        return null;
    }
}