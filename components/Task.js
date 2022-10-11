import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    );
};


export default Task;