import React from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import TrainItem from '../components/TrainItem';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, CardItem } from 'native-base';

const mapStateToProps = (state) => {
    return {
        trains: state.journey.trains,
    }
    // Object.assign({}, state, {
    //     trains : state.journey.trains
    // });
};

class TrainList extends React.Component {
    constructor(props){
        super(props);
    }

    renderTrains() {
        console.log(this.props.trains)
        return this.props.trains.map((train, i) => {

            // <TrainItem key={train.train_base.train_no} train={train.train_base} />
            <Text key={i}>{train.train_base.train_name}</Text>
        });
    }

    componentWillUnmount() {
        this.props.clearData();
    }

    render() {
        console.log(this.props.trains)
        return (
            <FlatList
                keyExtractor={(item, index) => { item.train_base.train_no}}
                data={this.props.trains}
                renderItem={({item}) => {
                    console.log(item)
                    return (
                        <TrainItem key={item.train_base.train_no} train={item.train_base} />
                    )
                }}
            />
        );
    }
}
{/* <ScrollView>
    {this.renderTrains()}
</ScrollView> */}

export default connect(mapStateToProps, actions)(TrainList);
