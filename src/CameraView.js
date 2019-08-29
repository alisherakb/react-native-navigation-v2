import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Dimensions } from 'react-native';
import BottomBar from './BottomTab';

export default class App extends Component {
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

  componentWillUpdate() {
    console.warn('CameraView componentWillUpdate');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, color: 'white' }}>Screen 2</Text>
        <BottomBar visibleTab={1} />
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
  },
  camera: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  welcome: {
    textAlign: 'center'
  }
});
