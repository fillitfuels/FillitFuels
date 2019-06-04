

import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from "react-navigation";

import GasMap from './views/gasMap';
import Payment from './views/payment.js';
import Address from './views/addresses.js';
import Vehicles from './views/vehicles.js';
import Settings from './views/settings.js';
import Gift from './views/gift';
import CustomDrawerNavigator from './views/CustomDrawerNavigator.js';
import Front from "./views/front.js";

const MainNavigator = createDrawerNavigator({

    Home: {
        navigationOptions: {
            drawerLabel: "Home",
            //drawerIcon: TODO: implement icons
        },
        screen: Front,

    },

    Payment: {
        navigationOptions: {
            drawerLabel: "Payment",
            //drawerIcon: TODO: implement icons
        },
        screen: Payment,
    },

        Vehicle: {
            navigationOptions: {
                drawerLabel: "Vehicles",
                //drawerIcon: TODO: implement icons
            },
            screen: Vehicles,
        },

        Address: {
            navigationOptions: {
                drawerLabel: "Addresses",
                //drawerIcon: TODO: implement icons
            },
            screen: Address,
        },
        Settings: {
            navigationOptions: {
                drawerLabel: "Settings",
                //drawerIcon: TODO: implement icons
            },
            screen: Settings,

        },
        Gift: {
            navigationOptions: {
                drawerLabel: "Send a Gift",
                //drawerIcon: TODO: implement icons
            },
            screen: Gift,

        },
},
    {
        contentComponent: CustomDrawerNavigator,
    },
);



const Main = createAppContainer( MainNavigator
);
export default Main;