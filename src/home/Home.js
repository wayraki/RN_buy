/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import Entry from "./Entry";
import Recommend from "./Recommend";
import GuessLike from "./GuessLike";

export default class Home extends Component {
  render() {
    return (
        <ScrollView>
          <Entry />
          <Recommend />
          <GuessLike />
          {/* <Button
            onPress={() => this.props.navigation.navigate('ToBeContinued')}
            title="Chat with Lucy"
          /> */}
        </ScrollView>
    );
  }
}
