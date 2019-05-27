import * as React from 'react';

import Modal from 'react-native-modal';
import{ TextInput, View, Text, DatePickerIOS, Button} from 'react-native';

export default class ScheduleModal extends React.Component{

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
                style={styles.modal}
                isVisible={this.props.visible}>
                <View
                    style={styles.container}
                >
                    <Text>Schedule a Time</Text>
                    <DatePickerIOS
                        date={this.state.date}
                        onDateChange={(datetime) => {this.setDate(datetime)}}
                        mode={this.state.pickerMode}
                        style={styles.datepicker}
                    />
                    <View>
                        <TextInput
                            style={styles.notes}
                            value={this.state.notes}
                            defaultValue="Additional Notes"
                            onChangeText={(text) => this.setState({notes:text})}

                        />
                    </View>
                    <Button
                        title="Schedule"
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
    },
    datepicker: {

    },
    notes: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
};