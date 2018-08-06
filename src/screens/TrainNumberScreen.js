import React from 'react';
import { View, Text, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import { Button, H2, Form, Item, Input, Label, Container, Content, Icon, H3 } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as strings from '../strings';

const mapStateToProps = state => {
    return {
        tno: state.journey.tno
    }
}

class TrainNumberScreen extends React.Component {
    static navigationOptions = {
        title: 'Train Search',
    }

    state = {
        widget: 'favourite',
        isLoading: false
    };

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

    async onfetchTnoPressed() {
        this.setState({ isLoading: true });
        await this.props.getTrain(this.props.tno, () => {
            this.setState({ isLoading: false });
            this.props.navigation.navigate('');
        });
    }

    getButtonData() {
        if(this.state.isLoading){
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size = "large" color = "#fff" />
                </View>
            );
        } else {
            return <H3 style={{fontFamily: 'Comfortaa_bold', color: '#fff'}}>{strings.SEARCH_TRAIN}</H3>;
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={{backgroundColor: '#fbc531', borderBottomEndRadius: 10, borderBottomStartRadius: 10}}>
                        <Form style={{ marginRight: 15 }}>
                            <Item inlineLabel style={[styles.itemStyle, { paddingRight: 30 }]}>
                                <Label style={[styles.labelStyle, {flex: 0.50}]}>{strings.TRAIN_NO}</Label>
                                <Input
                                    style={[styles.inputStyle,{flex: 0.75, flexGrow: 1}]}
                                    value={this.props.to}
                                    placeholder={strings.ENTER_TNO}
                                    onChangeText={(text) => this.props.tnoChanged(text)}/>
                            </Item>
                            <View style={{flex: 1, marginBottom: 15, marginTop: 15, alignItems: 'center', justifyContent: 'center', paddingRight: 5}}>
                                <Button
                                    disabled={this.state.isLoading}
                                    onPress={() => this.onfetchTnoPressed()}
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
        flexWrap: 'wrap',
        flexDirection:'row',
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

export default connect(mapStateToProps, actions)(TrainNumberScreen);