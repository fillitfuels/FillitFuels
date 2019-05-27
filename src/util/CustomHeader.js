import React from 'react';

import { View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons.js';


let {height, width} = Dimensions.get('window');

const CustomHeader = ({navigation}) => (
    <View style={styles.container}>
        <Icon
            name='md-menu'
            size={32}
            color='black'
            style={styles.icon}
            onPress={() => navigation.openDrawer()}
            />
    </View>
);

export default CustomHeader;

const headerHeight = 70;
export {headerHeight};


const styles = {
    container: {
        height: headerHeight,
        paddingTop: 20,
        //backgroundColor: 'white',
        flex:1,
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
    },
    icon: {
        paddingLeft: 20,
        paddingTop: 5,
    }
};