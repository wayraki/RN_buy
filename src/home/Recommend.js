/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';

import RecommendBox from "./RecommendBox";

import data from "../../data/data.json";

let { width } = Dimensions.get('window');

export default class Recommend extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let itemArr = [];
        let recommendGoods = data.recommendGoods;
        // 遍历
        for (var i = 0; i < recommendGoods.length; i++) {
            itemArr.push(
                <RecommendBox
                    title={recommendGoods[i].title}
                    subTitle={recommendGoods[i].subTitle}
                    image={recommendGoods[i].image}
                    titleColor={recommendGoods[i].titleColor}
                    key={i}
                />
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
        marginTop: 15,
        flexDirection: 'row',
    }
});
