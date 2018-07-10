import React from 'react';
import { Platform, View, Text, TouchableNativeFeedback } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button, H2, Form, Item, Input, Label, Container, Content, Icon, H3 } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
        date = date.toString();
        this.props.pickerSuccess(date.substring(0, date.lastIndexOf(":")).trim())
        this._hideDateTimePicker();
    };

    componentDidMount() {
        this.getNowDate();
    }

    getNowDate() {
        let date = new Date().toString();
        this.props.pickerSuccess(date.substring(0, date.lastIndexOf(":")).trim());
    }

    async onPickerClicked() {
        this._showDateTimePicker();
    }

    getWidget() {
        if(this.state.widget === 'favourite'){
            return(
                <Form>
                    <Item style={{borderColor: 'transparent', flex: 1 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 30 }}>
                            <Icon active name='home' />
                        </View>
                        <Input style={{fontFamily: 'Comfortaa', flexGrow: 1}} placeholder="Choose location" />
                    </Item>
                    <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 40, paddingRight: 5 }}>
                        <View style={{ height: 1, backgroundColor: '#dedede', borderColor: '#dedede', flexGrow: 1, alignSelf: 'center' }} />
                    </View>
                    <Item style={{borderColor: 'transparent'}}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 30 }}>
                            <Icon active name='flag' />
                        </View>
                        <Input placeholder="Choose location" style={{fontFamily: 'Comfortaa', flexGrow: 1}}/>
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
                    <View style={{backgroundColor: '#fbc531', borderBottomEndRadius: 10, borderBottomStartRadius: 10}}>
                        <Form style={{ marginRight: 15 }}>
                            <Item inlineLabel style={[styles.itemStyle,{flex: 1, flexDirection: 'row'}]}>
                                <Label style={[styles.labelStyle, {flex: 0.25}]}>From</Label>
                                <Input
                                    style={[styles.inputStyle,{flex: 0.75, flexGrow: 1}]}
                                    value={this.props.from}
                                    placeholder="Choose location"
                                    onChangeText={(text) => this.props.fromChanged(text)}/>
                                <Icon 
                                    onPress={() => this.props.swipeFromTo(this.props.from, this.props.to)}
                                    style={{transform: [{ rotate: '90deg'}], width: 30}} active name='swap' />
                            </Item>
                            <Item inlineLabel style={[styles.itemStyle, { paddingRight: 30 }]}>
                                <Label style={[styles.labelStyle, {flex: 0.25}]}>To</Label>
                                <Input 
                                    style={[styles.inputStyle,{flex: 0.75, flexGrow: 1}]}
                                    value={this.props.to}
                                    placeholder="Choose location"
                                    onChangeText={(text) => this.props.toChanged(text)}/>
                            </Item>
                            <Item style={{marginBottom: 10, flex: 1, borderColor: 'transparent', paddingVertical: 10 }}>
                                <Item inlineLabel style={[styles.itemStyle, {flex: 7, marginTop: 0, paddingVertical: 10}]}>
                                    <Label style={[styles.labelStyle,{flex: 0.40}]}>Departure</Label>
                                    <Text
                                        style={[styles.inputStyle, {flexWrap: 'nowrap', fontFamily: 'Comfortaa', marginEnd: 5, flex: 0.60}]}
                                        onPress={() => {this.onPickerClicked()}}>{this.props.dateTime}</Text>
                                </Item>
                                <Item style={{flex: 1, paddingHorizontal: 5, borderColor: 'transparent'}} >
                                    <Button primary
                                        style={{ backgroundColor: '#003082', justifyContent: 'center', alignItems: 'center', flexGrow: 1, paddingVertical: 10 }}
                                        onPress={() => this.getNowDate()} >
                                        <Text style={{fontFamily: 'Comfortaa', color: '#fff'}}>Now</Text>
                                    </Button>
                                </Item>
                            </Item>
                            <View style={{flex: 1, marginBottom: 15, alignItems: 'center', justifyContent: 'center', paddingRight: 5}}>
                                <Button primary style={{ width: '100%', flexGrow: 1, backgroundColor: '#003082', marginRight: 10, marginLeft: 10, alignItems: 'center', justifyContent: 'center'}}>
                                    <H3 style={{fontFamily: 'Comfortaa_bold', color: '#fff'}}>Plan</H3>
                                </Button>
                            </View>
                        </Form>
                    </View>
                    <View style={styles.mainFormStyle}>
                            <View style={styles.bodyStyle}>
                                <TouchableNativeFeedback
                                    background={TouchableNativeFeedback.SelectableBackground()}
                                    onPress={() => {this.setState({widget: 'favourite'});}}>
                                    <View style={[styles.buttonStyle, {borderBottomColor: (this.state.widget === 'favourite')?"#003082":"#fff"}]}>
                                        <H2 style={styles.buttonTextStyle}>FAVOURITE</H2>
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback
                                    background={TouchableNativeFeedback.SelectableBackground()}
                                    onPress={() => {this.setState({widget: 'history'})}}>
                                    <View style={[styles.buttonStyle, {borderBottomColor: (this.state.widget === 'history')?"#003082":"#fff"}]}>
                                        <H2 style={styles.buttonTextStyle}>HISTORY</H2>
                                    </View>
                                </TouchableNativeFeedback>
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
        fontFamily: 'Comfortaa'
    },
    itemStyle: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flex: 1,
        borderColor: 'transparent',
        borderRadius: 3
    },
    bodyStyle: {
        flex: 1, 
        flexDirection: 'row',
    },
    labelStyle: {
        flex: 0.4,
        color: '#003082',
        paddingLeft: 9,
        fontFamily: 'Comfortaa_bold'
    },
    inputStyle: {
        flex: 0.6,
        fontFamily: 'Comfortaa',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    buttonStyle: {
        flex: 0.5,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    container: {
        marginTop: (Platform.OS === 'android') ? 24 : 0
    },
    mainFormStyle: {
        margin: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        shadowOffset: { width: 0,  height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderRadius: 5,
        elevation: 2
    }
}

export default connect(mapStateToProps, actions)(Dashboard);
