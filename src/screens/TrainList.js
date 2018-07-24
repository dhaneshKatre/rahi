import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import TrainItem from '../components/TrainItem';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return Object.assign({}, state, {
        trains : state.journey.trains
    });
};

class TrainList extends React.Component {
    constructor(props){
        super(props);
    }

    renderTrains() {
        return this.props.trains.map((train, i) => {
            // <TrainItem key={train.train_base.train_no} train={train.train_base} />
            <Text key={i}>{train.train_base.train_name}</Text>
        });
    }

    componentWillUnmount() {
        this.props.clearData();
    }

    render() {
        return (
            <ScrollView>
                {this.renderTrains()}
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, actions)(TrainList);
