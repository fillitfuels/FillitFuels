import * as React from 'react';

import Modal from 'react-native-modal';
import{ Image, View, Text, DatePickerIOS, Button} from 'react-native';

export default class PaymentModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            visible: false,
            date: new Date(),
            pickerMode: 'datetime',
            notes: '',

        };
    }

    setDate(newDate){
        this.setState({
            date: newDate,
        });
    }

    render(){
        return (
            <Modal
                style={styles.container}
                isVisible={this.props.visible}>
                <View
                    style={styles.container}
                >
                    <Image
                        source={require('../../assets/Pictures/payment.png')}
                        style={{
                            //flex: 1,
                            width: 370,
                            height: 400,
                        }}
                        resizeMode="contain"
                    />
                    <Button
                        title="Pay"
                        onPress={() => {
                            this.props.handleConfirm(this.state.date, this.state.notes);
                        }}
                    />
                </View>
            </Modal>
        );
    }
}


styles = {
    modalStyle: {
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 600,
    },
    datepicker: {

    },
    notes: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
};