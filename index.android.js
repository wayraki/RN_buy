/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { StackNavigator } from "react-navigation";

import Main from "./src/Main";


class ToBeContinued extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'to be continued',
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>to be continued</Text>
      </View>
    );
  }
}

const RN_buy = StackNavigator({
  Main: { screen: Main },
  ToBeContinued: { screen: ToBeContinued },
});

AppRegistry.registerComponent('RN_buy', () => RN_buy);
