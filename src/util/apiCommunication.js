

import * as React from 'react';



export default class APIProxy extends React.Component {

    constructor(props) {
        super(props);

        this.baseUrl = 'https://fmch3lyd51.execute-api.us-east-2.amazonaws.com/beta';
    }


    requestServer(auth, resource, postBody, callback, error) {

        fetch(this.baseUrl + '/' + resource, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: auth,
            },
            body: JSON.stringify(postBody),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                callback(responseJson);
            })
            .catch((err) => {
                error(err);
            });
    }


}