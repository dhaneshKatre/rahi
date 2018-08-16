import React from 'react';
import {NavigationActions} from 'react-navigation';
import { Platform, View, Text, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button, H2, Form, Item, Input, Label, Container, Content, Icon, H3 } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as strings from '../strings';

const mapStateToProps = (state) => {
    return {
        from: state.journey.from,
        to: state.journey.to,
        dateTime: state.journey.dateTime
    }
}

class AtoB extends React.Component {
    static navigationOptions = {
        title: strings.ATOB_TITLE
    }

    state = {
        isDateTimePickerVisible: false,
        widget: 'favourite',
        isLoading: false
    };

    componentDidMount() {
        this.getNowDate();
    }
    
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        date = date.toString();
        this.props.pickerSuccess(date.substring(0, date.lastIndexOf(":")).trim())
        this._hideDateTimePicker();
    };

    getNowDate() {
        let date = new Date().toString();
        this.props.pickerSuccess(date.substring(0, date.lastIndexOf(":")).trim());
    }

    async onPickerClicked() {
        this._showDateTimePicker();
    }

    getButtonData() {
        if(this.state.isLoading){
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size = "large" color = "#fff" />
                </View>
            );
        } else {
            return <H3 style={{fontFamily: 'Comfortaa_bold', color: '#fff'}}>{strings.GET_TRAINS}</H3>;
        }
    }

    getWidget() {
        if(this.state.widget === 'favourite'){
            return(
                <Form>
                    <Item style={{borderColor: 'transparent', flex: 1 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 30 }}>
                            <Icon active name='home' />
                        </View>
                        <Input style={{fontFamily: 'Comfortaa', flexGrow: 1}} placeholder={strings.CHOOSE_LOCATION} />
                    </Item>
                    <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 40, paddingRight: 5 }}>
                        <View style={{ height: 1, backgroundColor: '#dedede', borderColor: '#dedede', flexGrow: 1, alignSelf: 'center' }} />
                    </View>
                    <Item style={{borderColor: 'transparent'}}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 30 }}>
                            <Icon active name='flag' />
                        </View>
                        <Input placeholder={strings.CHOOSE_LOCATION} style={{fontFamily: 'Comfortaa', flexGrow: 1}}/>
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

    async onGetTrainsClicked() {
        this.setState({ isLoading: true });
        await this.props.fetchTrains(this.props.from, this.props.to, () => {
            this.setState({ isLoading: false });
            this.props.navigation.navigate('list');
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={{backgroundColor: '#fbc531', borderBottomEndRadius: 10, borderBottomStartRadius: 10}}>
                        <Form style={{ marginRight: 15 }}>
                            <Item inlineLabel style={[styles.itemStyle,{flex: 1, flexDirection: 'row'}]}>
                                <Label style={[styles.labelStyle, {flex: 0.25}]}>{strings.FROM}</Label>
                                <Input
                                    autoCapitalize={'characters'}
                                    style={[styles.inputStyle,{flex: 0.75, flexGrow: 1}]}
                                    value={this.props.from}
                                    placeholder={strings.CHOOSE_LOCATION}
                                    onChangeText={(text) => this.props.fromChanged(text)}/>
                                <TouchableNativeFeedback 
                                    onPress={() => this.props.swipeFromTo(this.props.from, this.props.to)}
                                    background={TouchableNativeFeedback.SelectableBackground()}>
                                    <Icon
                                        style={{transform: [{ rotate: '90deg'}], width: 30}} active name='swap' />
                                </TouchableNativeFeedback>
                            </Item>
                            <Item inlineLabel style={[styles.itemStyle, { paddingRight: 30 }]}>
                                <Label style={[styles.labelStyle, {flex: 0.25}]}>{strings.TO}</Label>
                                <Input
                                    autoCapitalize={'characters'}
                                    style={[styles.inputStyle,{flex: 0.75, flexGrow: 1}]}
                                    value={this.props.to}
                                    placeholder={strings.CHOOSE_LOCATION}
                                    onChangeText={(text) => this.props.toChanged(text)}/>
                            </Item>
                            <Item style={{marginBottom: 10, flex: 1, borderColor: 'transparent', paddingVertical: 10 }}>
                                <Item inlineLabel style={[styles.itemStyle, {flex: 7, marginTop: 0, paddingVertical: 10}]}>
                                    <Label style={[styles.labelStyle,{flex: 0.40}]}>{strings.DEPARTURE}</Label>
                                    <Text
                                        numberOfLines={1}
                                        style={[styles.inputStyle, {flexWrap: 'wrap', fontFamily: 'Comfortaa', marginEnd: 5, flex: 0.60}]}
                                        onPress={() => {this.onPickerClicked()}}>{this.props.dateTime}</Text>
                                </Item>
                                <Item style={{flex: 1, paddingHorizontal: 5, borderColor: 'transparent'}} >
                                    <Button primary
                                        style={{ backgroundColor: '#003082', justifyContent: 'center', alignItems: 'center', flexGrow: 1, paddingVertical: 10 }}
                                        onPress={() => this.getNowDate()} >
                                        <Text style={{fontFamily: 'Comfortaa', color: '#fff'}}>{strings.NOW}</Text>
                                    </Button>
                                </Item>
                            </Item>
                            <View style={{flex: 1, marginBottom: 15, alignItems: 'center', justifyContent: 'center', paddingRight: 5}}>
                                <Button 
                                    disabled={this.state.isLoading}
                                    onPress={() => this.onGetTrainsClicked()}
                                    primary style={{ width: '100%', flexGrow: 1, backgroundColor: '#003082', marginRight: 10, marginLeft: 10, alignItems: 'center', justifyContent: 'center'}}>
                                    {this.getButtonData()}
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
                                        <H2 style={styles.buttonTextStyle}>{strings.FAVOURITE}</H2>
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback
                                    background={TouchableNativeFeedback.SelectableBackground()}
                                    onPress={() => {this.setState({widget: 'history'})}}>
                                    <View style={[styles.buttonStyle, {borderBottomColor: (this.state.widget === 'history')?"#003082":"#fff"}]}>
                                        <H2 style={styles.buttonTextStyle}>{strings.HISTORY}</H2>
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

export default connect(mapStateToProps, actions)(AtoB);
