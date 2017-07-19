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
    ScrollView
} from 'react-native';

import Header from "./Header";
import Cell from "./Cell";
import Logistics from "./Logistics";

export default class Mine extends Component {
    render() {
        return (
            <ScrollView style={styles.scrollViewStyle}>
                <Header />
                <View style={{ marginTop: 15 }}>
                    <Cell leftTitle="我的订单" rightTitle="查看全部订单" />
                </View>
                <Logistics />
                <View style={{ marginTop: 15 }}>
                    <Cell leftTitle="我的钱包" rightTitle="账户余额:¥1999" />
                    <Cell leftTitle="我的优惠券" rightTitle="10张" />
                    <Cell leftTitle="我的信用" rightTitle="763" />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Cell leftTitle="我的收货地址" rightTitle="3个" />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
});
