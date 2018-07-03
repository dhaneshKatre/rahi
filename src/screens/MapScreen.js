import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CoordinatorLayout, BottomSheetBehavior } from 'react-native-bottom-sheet-behavior';
import { MapView } from 'expo';
import * as actions from '../actions';

class MapScreen extends Component {
    render() {
        return (
            <CoordinatorLayout style={{flex: 1, backgroundColor: 'red'}}>
                <MapView
                    style={{ flex: 1 }}
                    region={{
                    latitude: 40.76727216,
                    longitude: -73.99392888,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                    }}/>
                <BottomSheetBehavior
                    peekHeight={70}
                    hideable={false}
                    state={BottomSheetBehavior.STATE_COLLAPSED} >
                    <View style={{backgroundColor: '#4389f2'}}>
                        <View style={{padding: 26}}>
                            <Text>BottomSheetBehavior!</Text>
                        </View>
                        <View style={{height: 900, backgroundColor: '#fff'}} />
                    </View>
                </BottomSheetBehavior>
            </CoordinatorLayout>
        );
    }
}

export default connect(null, actions)(MapScreen);