import React from 'react';
import { Platform, PixelRatio } from 'react-native';
import { View, Card, Content, CardItem, Left, Right, Body, Text, Icon } from 'native-base';
import 'core-js/es6/symbol'; 
import 'core-js/fn/symbol/iterator';
import * as strings from '../strings';

normalize = (size) => {
  if(Platform.OS === 'ios')
    return Math.round(PixelRatio.roundToNearestPixel(size))
  else
    return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
}

const Triangle = ({run}) => {
  return (
  <View style={{flexDirection: 'row'}}>
    <View style={{
      width: 60,
      borderBottomColor: '#dedede',
      borderBottomWidth: 2,
      marginBottom: 10
    }} />
    <View style={{
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderLeftWidth: 20,
      borderLeftColor: '#dedede',
      borderTopWidth: 10,
      borderTopColor: 'transparent',
      borderBottomWidth: 10,
      borderBottomColor: 'transparent'
    }} />
  </View>
  );
}

class TrainItem extends React.PureComponent {
  constructor(props){
    super(props);
  }

  renderWeekRunDays = (bin) => {
    const run = bin.split("");
    const week = ['M','T','W','T','F','S','S'];
    runDays = []
    for(const i = 0; i<run.length; i++)
      runDays.push((run[i] === '1') ? <Text key={i} style={styles.run}>{week[i]}</Text>:
      <Text key={i} style={[styles.run,{color: '#000'}]}>{week[i]}</Text>);    
    return runDays;
  }
  
  render() {
    const {
      train_name,
      train_no,
      average_speed,
  
      source_stn_name,
      dstn_stn_name,
      source_depart,
      dstn_reach,
  
      travel_time,
      distance_from_to,
      
      running_days
    } = this.props.train;

    return (
      <Content>
        <Card>
            <CardItem header bordered>
                <Left style={{flex: 5}}>
                    <View style={{flexDirection: 'column'}}>
                        <View style={styles.trainNameNoView}>
                            <Text style={styles.trainNameNoInfo}>{train_name}</Text>
                            <Text style={styles.trainNameNoInfo}>({train_no})</Text>
                        </View>
                        <View style={styles.weekView}>{this.renderWeekRunDays(running_days)}</View>
                    </View>
                </Left>
                <Right style={{flex: 2}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text>{strings.AVG_SPEED}</Text>
                        <Text style={styles.trainSpeed}>{average_speed} {strings.KMPH}</Text>
                    </View>
                </Right>
            </CardItem>
            <CardItem cardBody>
                <Body style={styles.bodyStyle}>
                    <Left style={{flexDirection: 'column' }}>
                        <Text style={styles.trainInfo}>{source_stn_name}</Text>
                        <Text style={styles.trainInfo}>{source_depart}</Text>
                    </Left>
                    <View>
                        <Triangle style={{alignSelf: 'center'}} />
                    </View>
                    <Right style={{flexDirection: 'column' }}>
                        <Text style={styles.trainInfo}>{dstn_stn_name}</Text>
                        <Text style={styles.trainInfo}>{dstn_reach}</Text>
                    </Right>
                </Body>
            </CardItem>
            <CardItem footer bordered>
                <Left style={{flex: 1}}>
                    <View style={styles.trainNameNoView}>
                        <Text>{strings.TOTAL_DUR} {travel_time}</Text>
                    </View>
                </Left>
                <Right style={{flex: 1}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.trainSpeed}>{strings.DISTANCE} {distance_from_to} km</Text>
                    </View>
                </Right>
            </CardItem>
        </Card>
      </Content>
    );
  }
}

const styles = {
    trainInfo: {
      marginHorizontal: 10,
      alignSelf: 'center',
      fontSize: normalize(15),
      fontWeight: 'bold'
    },
    trainNameNoInfo: {
      marginHorizontal: 10,
      alignSelf: 'center',
    },
    trainSpeed: {
      alignSelf: 'center',
    },
    holder: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    bodyStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    trainNameNoView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    run: {
      color: '#228B22',
      fontWeight: 'bold'
    },
    weekView: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
};

export default TrainItem;


/*

Object {
"coach_arrangement": Array [
  Object {
    "1": Object {
      "coach_id": "",
      "tag": "",
      "type": "En",
    },
  },
  Object {
    "2": Object {
      "coach_id": "",
      "tag": "",
      "type": "UR",
    },
  },
  Object {
    "3": Object {
      "coach_id": "",
      "tag": "",
      "type": "2S",
    },
  },
  Object {
    "4": Object {
      "coach_id": "",
      "tag": "",
      "type": "2S",
    },
  },
  Object {
    "5": Object {
      "coach_id": "",
      "tag": "",
      "type": "2S",
    },
  },
  Object {
    "6": Object {
      "coach_id": "",
      "tag": "",
      "type": "2S",
    },
  },
  Object {
    "7": Object {
      "coach_id": "",
      "tag": "",
      "type": "2S",
    },
  },
  Object {
    "8": Object {
      "coach_id": "",
      "tag": "",
      "type": "2S",
    },
  },
  Object {
    "9": Object {
      "coach_id": "D1",
      "tag": "D",
      "type": "2S",
    },
  },
  Object {
    "10": Object {
      "coach_id": "D2",
      "tag": "D",
      "type": "2S",
    },
  },
  Object {
    "11": Object {
      "coach_id": "D3",
      "tag": "D",
      "type": "2S",
    },
  },
  Object {
    "12": Object {
      "coach_id": "D4",
      "tag": "D",
      "type": "2S",
    },
  },
  Object {
    "13": Object {
      "coach_id": "D5",
      "tag": "D",
      "type": "2S",
    },
  },
  Object {
    "14": Object {
      "coach_id": "",
      "tag": "",
      "type": "2S",
    },
  },
  Object {
    "15": Object {
      "coach_id": "",
      "tag": "",
      "type": "2S",
    },
  },
  Object {
    "16": Object {
      "coach_id": "C2",
      "tag": "C",
      "type": "CC",
    },
  },
  Object {
    "17": Object {
      "coach_id": "C1",
      "tag": "C",
      "type": "CC",
    },
  },
  Object {
    "18": Object {
      "coach_id": "",
      "tag": "",
      "type": "UR",
    },
  },
],
"coach_types": Object {
  "1A": "0",
  "2A": "0",
  "2S": "1",
  "3A": "0",
  "CC": "1",
  "GN": "1",
  "SL": "0",
},
"rake_share": Array [
  "11007",
  "11008",
  "12169",
  "12170",
  "22105",
  "22106",
],
"region": "CR",
"train_base": Object {
  "average_speed": "44",
  "distance_from_to": "138",
  "dstn_reach": "11.05",
  "dstn_stn_code": "PUNE",
  "dstn_stn_name": "Pune Jn",
  "from_stn_code": "KYN",
  "from_stn_name": "Kalyan Jn",
  "from_time": "07.55",
  "running_days": "1111111",
  "source_depart": "07.00",
  "source_stn_code": "CSMT",
  "source_stn_name": "C Shivaji Maharaj T",
  "to_stn_code": "PUNE",
  "to_stn_name": "Pune Jn",
  "to_time": "11.05",
  "train_id": "666",
  "train_name": "DECCAN EXPRESS",
  "train_no": "11007",
  "travel_time": "03.10",
  "type": "MAIL_EXPRESS",
},
"train_type": "Intercity Express",

*/