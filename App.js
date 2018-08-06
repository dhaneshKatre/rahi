import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font, AppLoading } from 'expo';
import { Provider } from 'react-redux';

import store from './src/store';
import MainNavigator from './src/navigators/MainNavigator';
import TrainItem from './src/components/TrainItem';

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
    const train = {
      "average_speed": "44",
      "distance_from_to": "138",
      "dstn_reach": "11.05",
      "dstn_stn_code": "PUNE",
      "dstn_stn_name": "Pune Jn",
      "from_stn_code": "KYN",
      "from_stn_name": "Kalyan Jn",
      "from_time": "07.55",
      "running_days": "1111111",
      "source_depart": "07.00",
      "source_stn_code": "CSMT",
      "source_stn_name": "C Shivaji Maharaj T",
      "to_stn_code": "PUNE",
      "to_stn_name": "Pune Jn",
      "to_time": "11.05",
      "train_id": "666",
      "train_name": "DECCAN EXPRESS",
      "train_no": "11007",
      "travel_time": "03.10",
      "type": "MAIL_EXPRESS",
    };
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
            {/* <TrainItem train={train} /> */}
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
