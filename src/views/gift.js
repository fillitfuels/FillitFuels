
import React, {Component} from 'react';
import { View } from 'react-native';

import Header from '../util/CustomHeader.js';


export default class Gift extends Component{
    render() {
        return (
            <View style={styles.aboutPage}>
                <Header navigation={this.props.navigation}/>
            </View>
        );
    }
}


const styles = {
    aboutPage: {
        flex: 1,
        backgroundColor: 'black',
    },
}