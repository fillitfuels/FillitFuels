import React from 'react';



export default class Stationicons extends React.Component {

    stations = {
        shell: require('../../assets/Pictures/shell.png'),
        '76': require('../../assets/Pictures/76.png'),
        arco: require('../../assets/Pictures/arco.png'),
        chevron: require('../../assets/Pictures/chevron.png'),
        mobil: require('../../assets/Pictures/mobil.png'),
        valero: require('../../assets/Pictures/valero.png'),
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