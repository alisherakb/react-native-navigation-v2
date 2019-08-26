import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image
} from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class BottomBar extends React.Component {
  state = {
    index: 0,
    animation: new Animated.Value(0)
  };
  changeToTab = newIndex => {
    Navigation.mergeOptions('HomeTabs', {
      bottomTabs: {
        currentTabIndex: newIndex
      }
    });

    Animated.timing(this.state.animation, {
      toValue: newIndex,
      duration: 300
      // useNativeDriver: true
    }).start();
  };

  render() {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.changeToTab(0)}>
          <Animated.View
            style={[
              styles.iconView,
              {
                transform: [
                  {
                    translateX: this.state.animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -20]
                    })
                  }
                ],
                opacity: this.state.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8]
                })
              }
            ]}
          >
            <Image source={require('./signin.png')} style={[styles.image]} />
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => this.changeToTab(1)}>
          <Animated.View
            style={[
              styles.iconView,
              {
                transform: [
                  {
                    scale: this.state.animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.2]
                    })
                  }
                ],
                opacity: this.state.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1]
                })
              }
            ]}
          >
            <Image source={require('./signin.png')} style={[styles.image]} />
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const isTallIPhone =
  Platform.OS == 'ios' && Dimensions.get('window').height >= 812;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: isTallIPhone ? 83 : 49, // The Height of the iOS tab
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  iconView: {
    width: '25%',
    height: '100%',
    alignItems: 'center'
  },
  iconsText: {
    position: 'absolute',
    bottom: isTallIPhone ? 32 : 3,
    fontSize: 10
  },
  image: {
    position: 'absolute',
    bottom: isTallIPhone ? 50 : 21,
    width: 40,
    height: 40
  }
});
