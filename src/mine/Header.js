/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        var itemArr = [];
        var data = [{ 'number': '2', 'title': '收藏夹' }, { 'number': '6', 'title': '关注' }, { 'number': '33', 'title': '足迹' }];
        for (var i = 0; i < data.length; i++) {
            itemArr.push(
                <TouchableOpacity key={i}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{ color: '#666' }}>{data[i].number}</Text>
                        <Text style={{ color: '#666' }}>{data[i].title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return (
            <View>
                <View style={styles.topViewStyle}>
                    <Image source={{ uri: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=d034324c01f79052eb1f403c3cf2d738/0dd7912397dda1445da42dedbab7d0a20df486c4.jpg' }} style={styles.leftIconStyle} />
                    <View style={styles.centerViewStyle}>
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>wayraki</Text>
                    </View>
                </View>
                <View style={styles.bottomViewStyle}>
                    {itemArr}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topViewStyle: {
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 30,
        backgroundColor: 'rgba(255,96,0,1.0)'
    },
    leftIconStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    centerViewStyle: {
        flexDirection: 'row',
        width: width * 0.72
    },
    bottomViewStyle: {
        flexDirection: 'row',
    },
    bottomInnerViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: (width / 3) + 1,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
    }
});
