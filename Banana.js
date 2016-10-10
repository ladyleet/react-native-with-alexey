import { View, Text } from 'react-native';
import React, { Component } from 'react';
import styles from './theme';

class Banana extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Banana List
          </Text>
          
        </View>
      </View>
    );
  }
}

export default Banana;
