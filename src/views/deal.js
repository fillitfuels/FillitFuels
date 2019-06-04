
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar} from 'react-native';

export default class Deal extends Component{
    static navigationOptions = {
        header: null
    };
    render() {
        return (

            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#1e90ff"
                    barStyle="light-content"
                />
                <Text style={styles.title}>Get 15 {'\u00A2'} off per gallon!</Text>
                <Text style={styles.sentence}>Add a car wash and get 15 {'\u00A2'} off per gallon!</Text>
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


