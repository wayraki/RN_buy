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
    ScrollView,
    Dimensions,
} from 'react-native';

import EntryList from "./EntryList";

import data from "../../data/data.json";

let { width } = Dimensions.get('window');

export default class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 0
        }
    }

    onScrollAnimationEnd(e) {
        let currentPage = Math.round(e.nativeEvent.contentOffset.x / width);
        this.setState({
            activePage: currentPage
        });
        _scrollView.scrollTo({ x: width * currentPage });
    }

    render() {
        let itemArr = [];
        let dataArr = data.entryMenu;
        for (let i = 0; i < dataArr.length; i++) {
            itemArr.push(
                <EntryList key={i}
                    dataArr={dataArr[i]}
                />
            );
        }
        let indicatorArr = [], style;
        for (let i = 0; i < dataArr.length; i++) {
            indicatorArr.push(
                <Text key={i} style={{ fontSize: 25, color: i == this.state.activePage ? 'red' : 'gray' }}>&bull;</Text>
            );
        }
        return (
            <View style={styles.container}>
                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onScrollAnimationEnd.bind(this)}
                >
                    {itemArr}
                </ScrollView>
                <View style={styles.indicatorViewStyle}>
                    {indicatorArr}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    indicatorViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
