import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Text, View } from 'native-base';
import * as actions from '../actions';
import * as strings from '../strings';

class AuthScreen extends Component {
    static navigationOptions = {
        header: null
    }

    onLoginPressed = () => {
        this.props.facebookLogin();
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.token)
            alert("Login failed or cancelled!");
        else this.onAuthComplete(nextProps);
    }

    componentDidMount() {
        this.onAuthComplete(this.props);
    }

    onAuthComplete(props) {
        if(props.token)
            this.props.navigation.navigate('dashboard');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Button iconLeft primary
                        onPress = {this.onLoginPressed}>
                        <Icon name = 'logo-facebook' />
                        <Text>{strings.FB_LOGIN}</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
};

function mapStateToProps({ auth }) {
    return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);