import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Board from './Board';
import styles from './Style';

class ReTacToe extends Component {
  render() {
    return(
      <View style={styles.rootContainer}>
        <View style={styles.displayContainer}>
          <Text style={styles.appsTitle}>React Native Tic Tac Toe</Text>
          <Board />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReTacToe', () => ReTacToe);