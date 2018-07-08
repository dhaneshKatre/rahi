import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, StyleSheet } from 'react-native';
import * as actions from '../actions';

class AuthScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress = {this.props.facebookLogin}
                    title = "Login with Facebook!"/>
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
    }
  });

export default connect(null, actions)(AuthScreen);