import React from 'react';
import { Platform, View, Text, TouchableHighlight, Dimensions } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button, H2, Form, Item, Input, Label, Container, Content, Card, CardItem, Body, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 75
  }

const mapStateToProps = state => {
    return {
        from: state.journey.from,
        to: state.journey.to,
        dateTime: state.journey.dateTime
    }
}

class Dashboard extends React.Component {
    state = {
        isDateTimePickerVisible: false,
        widget: 'favourite'
    };
    
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        alert(date);
        this._hideDateTimePicker();
    };

    componentDidMount() {
        this.getNowDate();
    }

    getNowDate() {
        let date = new Date().toString();
        date = date.substring(0, date.indexOf("GMT")).trim();
        this.props.pickerSuccess(date);
    }

    async onPickerClicked() {
        this._showDateTimePicker();
    }

    getWidget() {
        if(this.state.widget === 'favourite'){
            return(
                <Form>
                    <Item style={{borderColor: 'transparent'}}>
                        <Icon active name='home' />
                        <Input placeholder="Choose location"/>
                    </Item>
                    <View style={{height: 1, borderWidth: 1, borderColor: '#dedede', width: Screen.width - 75, alignSelf: 'center'}} />
                    <Item style={{borderColor: 'transparent'}}>
                        <Icon active name='flag' />
                        <Input placeholder="Choose location"/>
                    </Item>
                </Form>
            );
        } else if(this.state.widget === 'history'){
            return(
                <View>
                    <Text>History</Text>
                </View>
            );
        } else return null;
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={{backgroundColor: '#ffcc33'}}>
                        <Form>
                            <Item inlineLabel style={styles.itemStyle}>
                                <Label style={styles.labelStyle}>From</Label>
                                <Input
                                    style={styles.inputStyle}
                                    value={this.props.from}
                                    placeholder="Choose location"
                                    onChangeText={(text) => this.props.fromChanged(text)}/>
                                <Icon 
                                    style={{transform: [{ rotate: '90deg'}]}} active name='swap' />
                            </Item>
                            <Item inlineLabel style={styles.itemStyle}>
                                <Label style={styles.labelStyle}>To</Label>
                                <Input 
                                    style={styles.inputStyle}
                                    value={this.props.to}
                                    placeholder="Choose location"
                                    onChangeText={(text) => this.props.toChanged(text)}/>
                            </Item>
                            <Item inlineLabel style={[styles.itemStyle, {flex: 0.6}]}>
                                <Label style={styles.labelStyle}>Departure</Label>
                                <Text
                                    style={{flex: 0.7}}
                                    onPress={() => {this.onPickerClicked()}}>{this.props.dateTime}</Text>
                            </Item>
                            <Item last style={{flex: 0.4}}>
                                <Button
                                    style={{flex: 1}}
                                    onPress={() => this.getNowDate()}
                                    bordered>
                                    <Text>Now</Text>
                                </Button>
                            </Item>
                        </Form>
                    </View>
                    <View style={{margin: 10, backgroundColor: '#fff', borderWidth: 1, borderColor: '#dedede'}}>
                            <View style={styles.bodyStyle}>
                                <TouchableHighlight 
                                    underlayColor="#f1f1f1"
                                    onPress={() => {this.setState({widget: 'favourite'});}}
                                    style={[styles.buttonStyle, {borderBottomColor: (this.state.widget === 'favourite')?"#003082":"#fff"}]}>
                                    <H2 style={styles.buttonTextStyle}>FAVOURITE</H2>
                                </TouchableHighlight>
                                <TouchableHighlight 
                                    underlayColor="#f1f1f1"
                                    onPress={() => {this.setState({widget: 'history'})}}
                                    style={[styles.buttonStyle, {borderBottomColor: (this.state.widget === 'history')?"#003082":"#fff"}]}>
                                    <H2 style={styles.buttonTextStyle}>HISTORY</H2>
                                </TouchableHighlight>
                            </View>
                            {this.getWidget()}
                    </View>
                </Content>
                <DateTimePicker
                    mode="datetime"
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
            </Container>
        );
    }
}

const styles = {
    buttonTextStyle: {
        color: '#003082',
        fontFamily: 'Roboto_medium'
    },
    itemStyle: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 5,
        flex: 1
    },
    bodyStyle: {
        flex: 1, 
        flexDirection: 'row',
    },
    labelStyle: {
        flex: 0.3,
        color: '#003082',
        margin: 5,
        fontWeight: 'bold'
    },
    inputStyle: {
        flex: 0.7,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    buttonStyle: {
        flex: 0.5,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    container: {
        marginTop: (Platform.OS === 'android') ? 24 : 0,
        backgroundColor: '#f0f0f0'
    }
}

export default connect(mapStateToProps, actions)(Dashboard);
