import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import * as actions from '../actions';
import SwipeUp from './SwipeUp';

class MapScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={[styles.map, {flex: 0.75}]}>
                    <MapView
                        style={{ flex: 1 }}
                        region={{
                            latitude: 19.2059205,
                            longitude: 73.1867936,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}/>
                </View>
                <View style={{flex: 0.25}}>
                    <SwipeUp />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 150,
    },
  });

export default connect(null, actions)(MapScreen);