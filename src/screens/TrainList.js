import React from 'react';
import { Text, FlatList } from 'react-native';
import TrainItem from '../components/TrainItem';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        trains: state.journey.trains,
    }
};

class TrainList extends React.PureComponent {
    
    constructor(props){
        super(props);
    }

    renderTrains() {
        console.log(this.props.trains)
        return this.props.trains.map((train, i) => {
            <Text key={i}>{train.train_base.train_name}</Text>
        });
    }

    componentWillUnmount() {
        this.props.clearData();
    }

    render() {
        return (
            <FlatList
                data={this.props.trains}
                legacyImplementation
                maxToRenderPerBatch={7}
                keyExtractor={item => item.train_base.train_no}
                initialNumToRender={7}
                renderItem={({item}) => (
                    <TrainItem train={item.train_base} />
                )}
            />
        );
    }
}
{/* <ScrollView>
    {this.renderTrains()}
</ScrollView> */}

export default connect(mapStateToProps, actions)(TrainList);
