/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var ReactNative = require('react-native');
var SearchPage = require('./SearchPage');


class Weather extends Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style = {styles.container}
        initialRoute={{title: 'Weather', component: SearchPage,}} />
    );
  }
}

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('Weather', () => Weather);
