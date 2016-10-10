/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Home from './Home';
import Apple from './Apple';
import Banana from './Banana';
import MyReact from './MyReact';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';

class puns extends Component {
  render() {
    return (
    <Navigator
      initialRoute={{ component: 'Home' }}
      renderScene={(route, navigator) => {
        switch (route.component) {
          case 'Home':
            return <Home myNavigator={navigator}/>;
          case 'Apple':
            return <Apple myNavigator={navigator}/>;
          case 'Banana':
            return <Banana myNavigator={navigator}/>;
          case 'MyReact':
            return <MyReact myNavigator={navigator}/>;
        }
      }}
    />
    );
  }
}

AppRegistry.registerComponent('puns', () => puns);
