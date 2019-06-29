
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar} from 'react-native';

export default class ScheduleCard extends Component{


    render() {
        return (

            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#1e90ff"
                    barStyle="light-content"
                />
                <Text style={styles.day}>{this.props.day}</Text>
                <Text style={styles.day}>{this.props.date}</Text>

                <Text style={styles.sentence}>Current Status:

                    <Text style={styles.status}> Incomplete</Text>

                </Text>

                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={() => this.props.navigation.navigate(
                            'DriverRoute',
                            {routeId: '1'})}>
                        <Text style={styles.btnTxt}>View the Driver's Location</Text>
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
    day: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: '#000000',
    },
    top: {
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
    status: {
        fontSize: 15,
        textAlign: 'center',
        color: 'blue',
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


