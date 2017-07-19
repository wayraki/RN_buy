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
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

import data from "../../data/data.json";

export default class Store extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(data.guessLike),
        };
    }
    renderRow(rowData) {
        return (
            <TouchableOpacity onPress={() => alert('敬请期待！···')}>
                <View style={styles.listViewStyle}>
                    <Image source={{ uri: rowData.imageUrl }} style={styles.imageViewStyle} />
                    <View style={styles.rightViewStyle}>
                        <View style={styles.rightTopViewStyle}>
                            <Text style={{ fontSize: 16, color: '#333' }}>{rowData.title}</Text>
                            <Text>{rowData.topRightInfo}</Text>
                        </View>
                        <Text style={{ color: '#666' }}>{rowData.subTitle}</Text>
                        <View style={styles.rightBottomViewStyle}>
                            <Text style={{ color: '#06c1ae' }}>{rowData.price}元</Text>
                            <Text>已售{rowData.bottomRightInfo}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        let dataArr = data.guessLike;
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listViewStyle: {
        backgroundColor: 'white',
        padding: 10,
        borderTopColor: '#DDD8CE',
        borderTopWidth: 0.5,
        flexDirection: 'row',
    },
    imageViewStyle: {
        width: 120,
        height: 90
    },
    rightViewStyle: {
        marginLeft: 8,
        flex: 1,
        justifyContent: 'center'
    },
    rightTopViewStyle: {
        flexDirection: 'row',
        marginBottom: 7,
        justifyContent: 'space-between'
    },
    rightBottomViewStyle: {
        flexDirection: 'row',
        marginTop: 7,
        justifyContent: 'space-between'
    }
});
