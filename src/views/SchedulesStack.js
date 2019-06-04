import React, {Component} from 'react';

import { createStackNavigator } from "react-navigation";
import Schedule from './Schedules.js';
import DriverRoute from './DriverRoute.js';




const ScheduleStackNavigator = createStackNavigator(
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

export default ScheduleStackNavigator;