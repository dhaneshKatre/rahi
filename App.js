import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font, AppLoading } from 'expo';
import { Provider } from 'react-redux';

import store from './src/store';
import MainNavigator from './src/navigators/MainNavigator';

console.disableYellowBox = true;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      Comfortaa: require("./assets/comfortaa/Comfortaa-Regular.ttf"),
      Comfortaa_bold: require("./assets/comfortaa/Comfortaa-Bold.ttf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({loading: false});
  }

  render() {
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
            <MainNavigator />
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
