
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
                <View style={styles.circleContainer}>
                <View style={styles.circle}>
                    <Text style={styles.circleNumber}>125</Text>
                    <Text style={styles.circleSentence}>dollars</Text>
                </View>
                    <View style={styles.circle}>
                        <Text style={styles.circleNumber}>25</Text>
                        <Text style={styles.circleSentence}>hours</Text>
                    </View>
                    <View style={styles.circle}>
                        <Text style={styles.circleNumber}>120</Text>
                        <Text style={styles.circleSentence}>gallons</Text>
                    </View>
                    <View style={styles.circle}>
                        <Text style={styles.circleNumber}>3 </Text>
                        <Text style={styles.circleSentence}>trees </Text>
                    </View>
                </View>
                <Text style={styles.sentence}>Fillit can save you big in the long run. Here's how much you have saved so far! </Text>
                <Text style={styles.btnTxt}>Learn more about how you are saving</Text>
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
        textDecorationLine: 'underline',
        color: '#85D4E7',
    },

    circle: {
        borderRadius:30,
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: '#1e90ff',
        justifyContent: 'center',
        alignItems: 'center',

        marginHorizontal: 10

    },
    circleSentence: {
        fontSize: 10,
        textAlign: 'center',
        color: '#000000',
    },
    circleNumber: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold',
    },
    circleContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

});


