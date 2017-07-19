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
    ListView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

let { width } = Dimensions.get('window');
let cols = 5;
let cellW = 70;
let cellH = 70;
let vMargin = (width - cellW * cols) / (cols + 1);

export default class EntryList extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    }

    renderRow(rowdata) {
        return (
            <TouchableOpacity onPress={() => alert('敬请期待！···')}>
                <View style={styles.cellStyle}>
                    <Image source={{ uri: rowdata.image }} style={{ width: 52, height: 52 }} />
                    <Text style={styles.titleStyle}>{rowdata.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    }
}

const styles = StyleSheet.create({
    contentViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width
    },
    cellStyle: {
        width: cellW,
        height: cellH,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: vMargin
    },
    titleStyle: {
        fontSize: 12,
        color: 'gray'
    }
});
