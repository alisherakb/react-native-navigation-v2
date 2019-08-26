import React, { Fragment } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import BottomBar from './BottomTab';

export default class SignUp extends React.Component {
  static options() {
    return {
      bottomTabs: {
        visible: false,
        drawBehind: true
      },
      bottomTab: {
        icon: require('./signin.png')
      }
    };
  }
  state = {
    username: '',
    password: '',
    email: '',
    phone_number: ''
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success);
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <BottomBar visibleTab={1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
