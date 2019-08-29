import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomBar from './BottomTab';

export default class FriendList extends Component {
  static options() {
    return {
      bottomTabs: {
        visible: false,
        drawBehind: true,
        animate: true
      },
      bottomTab: {
        icon: require('./Map.png')
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, color: 'white' }}>Screen 3</Text>
        <BottomBar visibleTab={2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
