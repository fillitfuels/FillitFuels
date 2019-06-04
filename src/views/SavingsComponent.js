
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';

export default class SavingsComponent extends Component{
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
                <Text style={styles.title}>FILLIT LIFETIME SAVINGS</Text>
                <Text style={styles.sentence}>Fillit can save you big in the long run. Here's how much you have saved so far! </Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={() => this.props.navigation.navigate('Details')}>
                        <Text style={styles.btnTxt}>See local prices</Text>
                    </TouchableOpacity>
                </View>
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
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: '#000000',
    },
    gasPricing: {
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: '#85D4E7',
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

