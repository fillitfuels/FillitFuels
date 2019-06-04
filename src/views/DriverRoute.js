import React from 'react';

import MapView from 'react-native-maps';


export default class DriverRoute extends React.Component {
    render() {
        return (
            <MapView
                style={styles.map}
            >

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
};