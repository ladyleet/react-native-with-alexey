import { View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styles from './theme';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to the Pun App!
          </Text>
          <Text>
            Decide which type of pun you{"'"}d like.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.myNavigator.push({ component: 'Apple' })} style={styles.buttonRed}>
            <Text>Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.myNavigator.push({ component: 'Banana' })} style={styles.buttonYellow}>
            <Text>Banana</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.myNavigator.push({ component: 'MyReact' })} style={styles.buttonGreen}>
            <Text>React</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
