import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { Font, AppLoading } from 'expo';
import { Provider } from 'react-redux';

import store from './src/store';
import MapScreen from './src/screens/MapScreen';
import AuthScreen from './src/screens/AuthScreen';
import SwipeUp from './src/screens/SwipeUp';
import Dashboard from './src/screens/Dashboard';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      Comfortaa: require("./assets/comfortaa/Comfortaa-Regular.ttf"),
      Comfortaa_bold: require("./assets/comfortaa/Comfortaa-Bold.ttf")
    });
    this.setState({loading: false});
  }

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
    if(this.state.loading){
      return (
        <View style={styles.contain}>
          <AppLoading />
        </View>
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.contain}>
            <Dashboard />
          </View>
        </Provider>
      );
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
