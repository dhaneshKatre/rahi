import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image, Text, Animated, TouchableOpacity } from 'react-native';
import Interactable from 'react-native-interactable';
import { MapView } from 'expo';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
}

export default class MapPanel extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(Screen.height-100);
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.panelContainer]}>
            <MapView
                style={{ flex: 1 }}
                region={{
                    latitude: 19.2059205,
                    longitude: 73.1867936,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
        </View>


        <View style={styles.panelContainer} pointerEvents={'box-none'}>
          <Animated.View
            pointerEvents={'box-none'}
            style={[styles.panelContainer, {
            backgroundColor: 'black',
            opacity: this._deltaY.interpolate({
              inputRange: [0, Screen.height-100],
              outputRange: [0.5, 0],
              extrapolateRight: 'clamp'
            })
          }]} />
          <Interactable.View
            verticalOnly={true}
            snapPoints={[{y: 40}, {y: Screen.height-300}, {y: Screen.height-100}]}
            boundaries={{top: -300}}
            initialPosition={{y: Screen.height-100}}
            animatedValueY={this._deltaY}>
            <View style={styles.panel}>
              <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
              </View>
              <Text style={styles.panelTitle}>San Francisco Airport</Text>
              <Text style={styles.panelSubtitle}>International Airport - 40 miles away</Text>
              <View style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Directions</Text>
              </View>
              <View style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Search Nearby</Text>
              </View>
            </View>
          </Interactable.View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  panel: {
    height: Screen.height + 300,
    padding: 20,
    backgroundColor: '#f7f5eee8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4
  },
  panelHeader: {
    alignItems: 'center'
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10
  },
  panelTitle: {
    fontSize: 27,
    height: 35
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#318bfb',
    alignItems: 'center',
    marginVertical: 10
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  photo: {
    width: Screen.width-40,
    height: 225,
    marginTop: 30
  },
  map: {
    height: Screen.height,
    width: Screen.width
  }
});


/*
import React, { Component } from 'react';
import { 
    View, 
    Text,
    Animated,
    StyleSheet,
    PanResponder,
    Dimensions,
    LayoutAnimation,
    UIManager
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = SCREEN_HEIGHT * 0.1;
const DURATION = 300;

export default class SwipeUp extends Component {

    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    getViewStyle() {
        const { position } = this.state;
        const brd = position.y.interpolate({
            inputRange: [-SCREEN_HEIGHT * 0.3, 0, SCREEN_HEIGHT * 0.3],
            outputRange: [10, 0, 10]
        });
        return {
            ...position.getLayout(),
            borderRadius: brd
        }
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (evt, gestureState) => {
                this.state.position.setOffset({x: this.state.position.x._value, y: this.state.position.y._value});
                //this.state.position.setValue({x: 0, y: 0});
            },
            onPanResponderMove: Animated.event([
                null, {dy: this.state.position.y},
            ]),
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (event, gesture) => {
                if(-SWIPE_THRESHOLD > gesture.dy) {
                    this.forceSwipe('up');
                } else if(SWIPE_THRESHOLD < gesture.moveY) {
                    this.forceSwipe('down');
                } else {
                    this.resetPosition();
                }
            }
        });
    }

    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        this.state = { position: new Animated.ValueXY() };
    }

    forceSwipe(direction) {
        const y = direction === 'up' ? SCREEN_HEIGHT - 400 : 0 ;
        Animated.timing(this.state.position, {
            toValue: { x: 0 , y: -y },
            duration: DURATION
        }).start(() => this.onSwipeComplete(direction));
    }

    onSwipeComplete(direction) {
        return;
    }

    resetPosition() {
        Animated.spring(this.state.position, {
            toValue: { x: 0, y: 0 }
        });
    }

    render() {
        let { position } = this.state;
        let [translateX, translateY] = [position.x, position.y]
        let viewStyle = [{transform: [{translateX}, {translateY}]}, this.getViewStyle()];
        return (
            <View style={styles.container}>
                <Animated.View 
                    style={[viewStyle, {flex: 1}]}
                    {...this._panResponder.panHandlers}>
                    <View style={styles.mapless}>
                        <Text style={{color: '#fff'}}>HELLO</Text>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: SCREEN_HEIGHT - 150,
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH,
      backgroundColor: '#24f3fd'
    },
    mapless: {
        backgroundColor: '#000',
        top: SCREEN_HEIGHT - 150,
        left: 0,
        right: 0,
        bottom: 0,
    },
    contain: {
      flex: 1,
      backgroundColor: '#fff'
    }
  });
  */