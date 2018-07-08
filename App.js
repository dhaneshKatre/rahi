import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { Provider } from 'react-redux';

import store from './src/store';
import MapScreen from './src/screens/MapScreen';
import AuthScreen from './src/screens/AuthScreen';
import SwipeUp from './src/screens/SwipeUp';

export default class App extends React.Component {
  render() {
    // const MainNavigator = createStackNavigator ({
    //   up: {
    //     screen: SwipeUp,
    //     title: "Swipe Up"
    //   }
    //   // map: {
    //   //   screen: MapScreen
    //   // },
    //   // auth: {
    //   //   screen: AuthScreen,
    //   //   title: "Auth"
    //   // }
    // });
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SwipeUp />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
