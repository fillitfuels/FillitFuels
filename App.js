
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {createDrawerNavigator} from "react-navigation";
import {withAuthenticator, Authenticator} from 'aws-amplify-react-native';

import Container from './src/Container';
import Card from './src/Card';
import FrontSetUp from './src/views/frontSetUp';
import GasPriceComponent from './src/views/GasPriceComponent';
import SavingsComponent from './src/views/SavingsComponent';

import MainNavigator from './src/Main.js';



class HomeScreen extends Component{
    static navigationOptions = {
        header: null
    };
    render() {
        return (

            <Container>
                <Card>
                    <FrontSetUp/>
                </Card>
                <Card>
                    <GasPriceComponent/>
                </Card>
                <Card>
                    <SavingsComponent/>
                </Card>
            </Container>
        );
    }
}



class SignUpScreen extends Component{
    static navigationOptions = {
        title: 'Registration',
        headerRight: <View/>
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#1e90ff"
                    barStyle="light-content"
                />
                <View style={styles.nameContainer}>
                    <TextInput
                        style={styles.nameInput}
                        placeholder= "First Name"
                    />
                    <TextInput
                        style={styles.nameInput}
                        placeholder= "Last Name"
                    />
                </View>
                <TextInput
                    style={styles.registrationInput}
                    placeholder= "Email Address"
                />
                <TextInput
                    style={styles.registrationInput}
                    placeholder= "Phone Number"
                />
                <TextInput
                    style={styles.registrationInput}
                    placeholder= "Password"
                    secureTextEntry
                />
                <TextInput
                    style={styles.registrationInput}
                    placeholder= "Confirm Password"
                    secureTextEntry
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.signUpBtn}
                        onPress={() => alert("Signup Works")}>
                        <Text style={styles.btnTxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


type Props = {};

/*
//  export default class App extends Component<Props> {
    render() {
        return (
            <Authenticator>
                <MainNavigator/>
            </Authenticator>

        );
    }
}
*/

export default withAuthenticator(MainNavigator);

class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'My App',
        headerRight: <View/>
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                    </MapView>
                </View>
            </View>
        );
    }
}

const RootStack= createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        SignUp: SignUpScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: '#1e90ff'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1
            }
        }
    }
);


//const AppContainer = createAppContainer(RootStack);

//export default withAuthenticator(AppContainer);

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
    registrationContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: "#fff",
        fontFamily: "DancingScript-Bold"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontFamily: "NotoSerif-Bold",
        fontSize: 20,
    },
    input: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10
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
    signUpBtn: {
        backgroundColor: "#FFD700",
        padding: 15,
        width: "100%",
        textAlign: "center",
        marginTop: 10
    },
    nameInput: {
        width: "50%",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
        borderColor: "#000000",
        borderWidth: 1
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%"
    },
    registrationInput: {
        width: "90%",
        backgroundColor: "#fff",
        borderColor: "#000000",
        borderWidth: 1,
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 600,
        width: 600,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


