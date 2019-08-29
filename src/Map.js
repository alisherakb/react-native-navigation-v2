import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomBar from './BottomTab';

export default class Map extends Component {
  static options() {
    return {
      bottomTabs: {
        visible: false,
        drawBehind: true
      },
      bottomTab: {
        icon: require('./Map.png')
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, color: 'white' }}>Screen 1</Text>
        <BottomBar visibleTab={0} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
