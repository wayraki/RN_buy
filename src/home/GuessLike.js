/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Store from "./Store";

export default class GuessLike extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>猜你喜欢</Text>
                <Store />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        fontSize: 18,
        backgroundColor: '#fff'
    }
});
