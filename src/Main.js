

import React from 'react';
import { createAppContainer, createDrawerNavigator } from "react-navigation";

import Home from './views/home.js';
import Payment from './views/payment.js';
import Address from './views/addresses.js';
import Vehicles from './views/vehicles';
import Settings from './views/settings.js';
import Gift from './views/gift';
import CustomDrawerNavigator from './views/CustomDrawerNavigator.js';
import Vehicle from "./views/vehicles";

const MainNavigator = createDrawerNavigator({
    Home: {
        navigationOptions: {
            drawerLabel: "Home",
            //drawerIcon: TODO: implement icons
        },
        screen: Home,

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
            screen: Vehicle,
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

const Main = createAppContainer(MainNavigator);
export default Main;