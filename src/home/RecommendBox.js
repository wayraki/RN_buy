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
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

let { width } = Dimensions.get('window');

export default class RecommendBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let itemArr = [];
        let data = [
            { "title": "我们约吧", "subTitle": "恋人家人好朋友", "image": "http:///p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png", "titleColor": "#55a40f" },
            { "title": "低价超值", "subTitle": "十元惠生活", "image": "http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg", "titleColor": "#ff3f0d" },
            { "title": "逛街必备", "subTitle": "甜点奶茶随手找", "image": "http://p0.meituan.net/mmc/257967793a6a089574b7491e7346e5729041.png", "titleColor": "#f742a0" }
        ];
        // 遍历
        for (var i = 0; i < data.length; i++) {
            itemArr.push(
                <RecommendBox
                    title={data[i].title}
                    subTitle={data[i].subTitle}
                    image={data[i].image}
                    titleColor={data[i].titleColor}
                    key={i}
                />
            );
        }
        return (
            <TouchableOpacity onPress={() => alert('敬请期待！···')}>
                <View style={styles.container}>
                    <Text style={[{ color: this.props.titleColor }, styles.titleStyle]}>{this.props.title}</Text>
                    <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    <Image source={{ uri: this.props.image }} style={{ width: 64, height: 64, resizeMode: 'contain' }} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: width * 0.333 - 1,
        height: 120,
        marginRight: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subTitleStyle: {
        color: 'gray'
    }
});
