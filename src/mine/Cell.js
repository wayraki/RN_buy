/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class Mine extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{ color: 'gray' }}>{this.props.rightTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'center',
        height: 50,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8
    },
    leftTitleStyle: {
        fontSize: 16
    }
});
