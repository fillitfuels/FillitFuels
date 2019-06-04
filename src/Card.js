import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default props => (
    <View style={styles.card}>
        <View style={styles.text}>{props.children}</View>

    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 1,
    },
    text: {
        fontSize: 30,
        marginBottom: 20,
        color: "#4A4A4A",
    },
});