import React, {Component} from 'react';

import {createSwitchNavigator} from "react-navigation";
import Schedule from './Schedules.js';
import DriverRoute from './DriverRoute.js';




const OrderSwitchNavigator = createSwitchNavigator(
    {
        ScheduleDisplay: {
            screen: Schedule,
            navigationOptions: {
            }
        },

        DriverRoute: {
            navigationOptions: {
            },

            screen: DriverRoute,

        },
    },
    {
        initialRouteName: 'ScheduleDisplay',

    }
);

export default OrderSwitchNavigator;