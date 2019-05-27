

import React from 'react';
import { createAppContainer, createDrawerNavigator } from "react-navigation";

import Home from './views/home.js';
import About from './views/about.js';
import CustomDrawerNavigator from './views/CustomDrawerNavigator.js';

const MainNavigator = createDrawerNavigator({
    Home: {
        navigationOptions: {
            drawerLabel: "Home",
            //drawerIcon: TODO: implement icons
        },
        screen: Home,

    },

    About: {
        navigationOptions: {
            drawerLabel: "About",
            //drawerIcon: TODO: implement icons
        },
        screen: About,
    },
},
    {
        contentComponent: CustomDrawerNavigator,
    },
);

const Main = createAppContainer(MainNavigator);
export default Main;