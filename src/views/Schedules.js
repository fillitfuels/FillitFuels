import React, {Component} from 'react';

import {StyleSheet, View} from "react-native";
import Container from "../Container";
import Header from "../util/CustomHeader";
import Card from "../Card";
import ScheduleCard from './ScheduleCard.js';

import APIProxy from '../util/apiCommunication';
import {Auth} from "aws-amplify";

export default class Schedules extends Component{

    constructor(props){
        super(props);
        this.state = {
            schedules: [],
            resource: 'getschedule',
        };

        this.api = new APIProxy();
    }

    fetchSchedules(){
        Auth.currentAuthenticatedUser()
            .then( (auth) => {
                const idToken = auth.signInUserSession.idToken.jwtToken;
                this.api.requestServer( idToken, this.state.resource, {},
                    (res) => {this.retrieveJobSuccess(res)},
                    (rej) => {this.retrieveJobFail(rej)
                    });
            })
            .catch( (rej) => {
                console.log(rej);
            });
    }

    retrieveJobSuccess(res){
        let newSchedules = [];
        console.log(res);



        this.setState({
            schedules: newSchedules,
        });
    }

    retrieveJobFail(rej){
        console.log(rej);
    }

    componentDidMount(){
        this.fetchSchedules();

    }
static navigationOptions = {
        title: 'Schedules'
};

    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <Container>

                    <Card>
                        <ScheduleCard
                            date={'06/04/2019'}
                            day={"Friday"}
                            navigation={this.props.navigation}
                        >

                        </ScheduleCard>

                    </Card>

                </Container>


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
       // margin: 15
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


