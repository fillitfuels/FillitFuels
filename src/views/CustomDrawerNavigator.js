import React from 'react';

import {View} from 'react-native';
import { DrawerItems } from 'react-navigation';

const CustomDrawerNavigator = props => (
    <View style={styles.container}>
        <DrawerItems
            activeBackgroundColor={"black"}
            activeTintColor={"white"}
            //iconContainerStyle={styles.icons}
            {...props}
        />
    </View>
);


const styles = {
    container: {
        flex: 1
    },
    icons: {

    }
}

export default CustomDrawerNavigator;