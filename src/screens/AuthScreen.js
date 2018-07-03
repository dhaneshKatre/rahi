import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import * as actions from '../actions';

class AuthScreen extends Component {
    render() {
        return (
            <View>
                <Button
                    onPress = {this.props.facebookLogin}
                    title = "Login with Facebook!"/>
            </View>
        );
    }
}

export default connect(null, actions)(AuthScreen);