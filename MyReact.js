import { View, Text } from 'react-native';
import React, { Component } from 'react';
import styles from './theme';

class MyReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            MyReact List
          </Text>
        </View>
      </View>
    );
  }
}

export default MyReact;
