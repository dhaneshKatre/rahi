import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <MapView
            style={{ flex: 1 }}
            region={{
            latitude: 40.76727216,
            longitude: -73.99392888,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
            }}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
