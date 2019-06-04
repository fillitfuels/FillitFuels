
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar} from 'react-native';

import Container from './src/Container';
import Card from './src/Card';


export default class Front extends Component{
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <Container>
                <Card>
                    <View style={styles.container}>
                        <StatusBar
                            backgroundColor="#1e90ff"
                            barStyle="light-content"
                        />
                        <Text style={styles.title}>Hello Frank!</Text>
                        <Text style={styles.sentence}>Get your tank topped off every week and add extra services to
                            your visits like car washes, tire checks, and more. </Text>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity
                                style={styles.userBtn}
                                onPress={() => this.props.navigation.navigate('Details')}>
                                <Text style={styles.btnTxt}>SETUP GAS DELIVERY</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </Container>
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


