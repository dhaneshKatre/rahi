import React from 'react';
import { TouchableNativeFeedback, PixelRatio, Platform } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Icon } from 'native-base';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config/config.json';
import * as strings from '../strings';

const Icon1 = createIconSetFromFontello(fontelloConfig);

normalize = (size) => {
  if(Platform.OS === 'ios')
    return Math.round(PixelRatio.roundToNearestPixel(size))
  else
    return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
}

class Dashboard extends React.Component {
  static navigationOptions = {
    title: strings.DASHBOARD_TITLE
  }

  render() {
    return (
    <Container>
      <Content>
        <Card style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
          <CardItem style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 100}}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('atob')}
            background={TouchableNativeFeedback.SelectableBackground()} >
              <Body style={styles.body}>
                <Icon active name="search" size={32}/>
                <Text style={styles.textStyle}>{strings.TRAIN_BETWEEN_STATIONS}</Text>
              </Body>
            </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('train')}
            background={TouchableNativeFeedback.SelectableBackground()} >
            <Body style={styles.body}>
              <Icon active name="calendar" size={32}/>
              <Text style={styles.textStyle}>{strings.TRAIN_SCHEDULE}</Text>
            </Body>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('pnr')}
            background={TouchableNativeFeedback.SelectableBackground()} >
            <Body style={styles.body}>
              <Icon active name="train" size={32}/>
              <Text style={styles.textStyle}>{strings.PNR_STATUS}</Text>
            </Body>
          </TouchableNativeFeedback>
          </CardItem>

          <CardItem style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 100}}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('')}
              background={TouchableNativeFeedback.SelectableBackground()} >
              <Body style={styles.body}>
                <Icon1 active name="airport" size={32}/>
                <Text style={styles.textStyle}>{strings.SEAT_AVAIL}</Text>
              </Body>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('')}
              background={TouchableNativeFeedback.SelectableBackground()} >
              <Body style={styles.body}>
                <Icon1 active name="old-train" size={37}/>
                <Text style={styles.textStyle}>{strings.LIVE_TRAIN_STATUS}</Text>
              </Body>
              </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('')}
              background={TouchableNativeFeedback.SelectableBackground()} >
              <Body style={styles.body}>
                <Icon1 active name="station" size={37}/>
                <Text style={styles.textStyle}>{strings.LIVE_STN_INFO}</Text>
              </Body>
            </TouchableNativeFeedback>
            </CardItem>

          <CardItem style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 100}}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('')}
            background={TouchableNativeFeedback.SelectableBackground()} >
              <Body style={styles.body}>
                <Icon1 active name="seat(1)" size={32}/>
                <Text style={styles.textStyle}>{strings.SEAT_MAP}</Text>
              </Body>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('')}
              background={TouchableNativeFeedback.SelectableBackground()} >
              <Body style={styles.body}>
                <Icon1 active name="rupee-indian" size={32}/>
                <Text style={styles.textStyle}>{strings.FARE_ENQUIRY}</Text>
              </Body>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('')}
              background={TouchableNativeFeedback.SelectableBackground()} >
              <Body style={styles.body}>
                <Icon1 active name="theater" size={32}/>
                <Text style={styles.textStyle}>{strings.BOOK_CANCEL_TICKET}</Text>
              </Body>
            </TouchableNativeFeedback>
            </CardItem>

          <CardItem style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 100}}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('')}
              background={TouchableNativeFeedback.SelectableBackground()} >
              <Body style={styles.body}>
                <Icon active name="notifications" size={32}/>
                <Text style={styles.textStyle}>{strings.STATION_ALARM}</Text>
              </Body>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('')}
              background={TouchableNativeFeedback.SelectableBackground()} >
              <Body style={styles.body}>
                <Icon active name="close-circle" size={32}/>
                <Text style={styles.textStyle}>{strings.CANCELLED_TRAINS}</Text>
              </Body>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('')}
              background={TouchableNativeFeedback.SelectableBackground()} >
              <Body style={styles.body}>
                <Icon1 active name="clock" size={32}/>
                <Text style={styles.textStyle}>{strings.RESCHEDULED_TRAINS}</Text>
              </Body>
            </TouchableNativeFeedback>
            </CardItem>
        </Card>

        <Card style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
          <CardItem style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 100}}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('')}
              background={TouchableNativeFeedback.SelectableBackground()} >
                <Body style={styles.body}>
                  <Icon active name="pin" size={32}/>
                  <Text style={styles.textStyle}>{strings.NEARBY_STN}</Text>
                </Body>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('')}
                background={TouchableNativeFeedback.SelectableBackground()} >
                <Body style={styles.body}>
                    <Icon1 active name="departures" size={32}/>
                    <Text style={styles.textStyle}>{strings.PLATFORM_LOCATOR}</Text>
                </Body>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('')}
                background={TouchableNativeFeedback.SelectableBackground()} >
                <Body style={styles.body}>
                    <Icon1 active name="nation(1)" size={32}/>
                    <Text style={styles.textStyle}>{strings.RAKE_COACH_POS}</Text>
                </Body>
              </TouchableNativeFeedback>
            </CardItem>
        </Card>
      </Content>
    </Container>
    );
  }
}

const styles = {
  grid: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '7'
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: normalize(16),
    fontWeight: 'bold'
  }
};

export default Dashboard;
