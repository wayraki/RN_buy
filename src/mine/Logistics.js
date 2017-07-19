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
    TouchableOpacity
} from 'react-native';

export default class Mine extends Component {
    render() {
        var itemArr = [];
        var data = [
            { "number": "1", "title": "待付款" },
            { "number": "0", "title": "待发货" },
            { "number": "1", "title": "待收货" },
            { "number": "3", "title": "待评价" },
            { "number": "", "title": "退款/售后" }
        ];
        // 遍历
        for (var i = 0; i < data.length; i++) {
            itemArr.push(
                <TouchableOpacity activeOpacity={0.5} onPress={() => { alert('敬请期待') }} key={i}>
                    <View style={styles.innerViewStyle}>
                        <Text style={{ color: '#666' }}>{data[i].number}</Text>
                        <Text style={{ color: '#666' }}>{data[i].title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.container}>
                {itemArr}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around'
    },
    innerViewStyle: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
