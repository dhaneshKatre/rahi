import React from 'react';
import { Icon, Container, Content, Item, Input, Text } from 'native-base';
import TrainItem from '../components/TrainItem';
import { connect } from 'react-redux';
import SearchableFlatList from 'searchable-flatlist';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        trains: state.journey.trains,
    }
};

class TrainList extends React.PureComponent {
    
    constructor(props){
        super(props);
        this.state = { searchTrain: "" };
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
            <Container>
                <Content>
                    <Item>
                        <Icon active name='search' />
                        <Input 
                            onChangeText={searchTerm => this.setState({searchTerm})}
                            placeholder='Search' />
                    </Item>
                    <SearchableFlatList 
                        searchProperty={item.train_base.train_name}
                        searchTerm={this.state.searchTerm}
                        data={this.props.trains}
                        legacyImplementation
                        maxToRenderPerBatch={7}
                        keyExtractor={item => item.train_base.train_no}
                        initialNumToRender={7}
                        renderItem={({item}) => (<TrainItem train={item.train_base}/>)} />
                </Content>
            </Container>
        );
    }
}
{/* <ScrollView>
    {this.renderTrains()}
</ScrollView> */}

export default connect(mapStateToProps, actions)(TrainList);
