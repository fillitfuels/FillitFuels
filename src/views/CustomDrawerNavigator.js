import React from 'react';

import {SafeAreaView, View, ScrollView, Image} from 'react-native';
import { DrawerItems } from 'react-navigation';

const CustomDrawerNavigator = props => (
    <View style={styles.container}>
        <View style={{height: 250,backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../../assets/Pictures/tesla.png')} style={{height: 150, width:150, borderRadius: 80}} />
        </View>
        <ScrollView>
        <DrawerItems
            activeBackgroundColor={"black"}
            activeTintColor={"white"}
            //iconContainerStyle={styles.icons}
            {...props}
        />
        </ScrollView>
    </View>
);


const styles = {  //put styles.container in style= if doesnt work
    container: {
        flex: 1
    },
    icons: {

    }
}

export default CustomDrawerNavigator;