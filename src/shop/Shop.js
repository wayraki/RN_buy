/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Picker,
    ScrollView,
    Dimensions
} from 'react-native';

import Store from "../home/Store";

let { width } = Dimensions.get('window');

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '全部分类',
            place: '全城',
            sort: '默认排序'
        };
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Picker
                        style={styles.item}
                        selectedValue={this.state.type}
                        onValueChange={(value) => this.setState({ type: value })}>
                        <Picker.Item label="全部分类" value="全部分类" />
                        <Picker.Item label="美食" value="美食" />
                        <Picker.Item label="电影" value="电影" />
                        <Picker.Item label="酒店" value="酒店" />
                        <Picker.Item label="购物" value="购物" />
                        <Picker.Item label="旅游" value="旅游" />
                        <Picker.Item label="运动健身" value="运动健身" />
                        <Picker.Item label="汽车服务" value="汽车服务" />
                        <Picker.Item label="医疗" value="医疗" />
                    </Picker>
                    <Picker
                        style={styles.item}
                        selectedValue={this.state.place}
                        onValueChange={(value) => this.setState({ place: value })}>
                        <Picker.Item label='全城' value='全城' />
                        <Picker.Item label='福田区' value='福田区' />
                        <Picker.Item label='罗湖区' value='罗湖区' />
                        <Picker.Item label='南山区' value='南山区' />
                        <Picker.Item label='宝安区' value='宝安区' />
                        <Picker.Item label='龙岗区' value='龙岗区' />
                        <Picker.Item label='盐田区' value='盐田区' />
                    </Picker>
                    <Picker
                        style={styles.item}
                        selectedValue={this.state.sort}
                        onValueChange={(value) => this.setState({ sort: value })}>
                        <Picker.Item label='默认排序' value='默认排序' />
                        <Picker.Item label='离我最近' value='离我最近' />
                        <Picker.Item label='评价最高' value='评价最高' />
                        <Picker.Item label='最新发布' value='最新发布' />
                        <Picker.Item label='人气最高' value='人气最高' />
                        <Picker.Item label='价格最低' value='价格最低' />
                        <Picker.Item label='价格最高' value='价格最高' />
                    </Picker>
                </View>
                <ScrollView>
                    <Store />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item:{
        backgroundColor: 'white',
        width: width * 0.333 - 1,
        marginRight: 1,
        alignItems: 'center'
    }
});
