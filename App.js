
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { createDrawerNavigator} from "react-navigation";


class HomeScreen extends Component{
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
                <Text style={styles.welcome}>Login to Fillit!</Text>
                <TextInput
                    style={styles.input}
                    placeholder= "Email Address"
                />
                <TextInput
                    style={styles.input}
                    placeholder= "Password"
                    secureTextEntry
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={() => this.props.navigation.navigate('Details')}>
                        <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.btnTxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
export default class App extends Component<Props> {
    render() {
        return (
            <AppContainer/>
        );
    }
}

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


const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e90ff',
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
        backgroundColor: "#FFD700",
        padding: 15,
        width: "45%",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%"
    },
    btnTxt: {
        fontSize: 18,
        textAlign: "center"
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


