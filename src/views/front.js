
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar} from 'react-native';

import { createAppContainer, createDrawerNavigator, createStackNavigator } from "react-navigation";

import Container from '../Container';
import Card from '../Card';
import FrontSetUp from "./frontSetUp";
import GasPriceComponent from "./GasPriceComponent";
import SavingsComponent from "./SavingsComponent";

import Deal from "./deal";

import Header, {headerHeight} from '../util/CustomHeader.js';

export default class Front extends Component{
    static navigationOptions = {
        header: null
    };
    render() {
        return (
                <View style={styles.container}>

            <Container>
                <Header navigation={this.props.navigation}/>
                <Card>
                    <FrontSetUp/>
                </Card>
                <Card>
                    <Deal/>
                </Card>
                <Card>
                    <GasPriceComponent
                        navigation={this.props.navigation}
                    />
                </Card>
                <Card>
                    <SavingsComponent/>
                </Card>
            </Container>
                        <Header navigation={this.props.navigation}/>

                </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: '#000000',
    },
    sentence: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: '#000000',
    },
    userBtn: {
        backgroundColor: "#85D4E7",
        padding: 15,
        width: "90%",
        alignItems: 'center',
    },
    btnContainer: {
        //flexDirection: "row",
        //justifyContent: "space-between",
        width: "90%",
        alignItems: 'center',
    },
    btnTxt: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#fff',
    },

});


