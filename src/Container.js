import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export default class Container extends React.Component {
    state = {
        screenHeight: height,
    };

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    };

    render() {
        const scrollEnabled = this.state.screenHeight > height;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#468189" />
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={styles.scrollView}
                    scrollEnabled={scrollEnabled}
                    onContentSizeChange={this.onContentSizeChange}
                >
                    <View style={styles.content}>
                        {this.props.children}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollView: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        justifyContent: "space-between",
        padding: 20,
        marginTop: 20,
    },
});