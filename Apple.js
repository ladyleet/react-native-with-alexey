import { View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styles from './theme';

class Apple extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Apple List
          </Text>
          <TouchableOpacity onPress={() => this.props.myNavigator.pop({ component: 'Home' })} style={styles.buttonRed}>
            <Text>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Apple;
