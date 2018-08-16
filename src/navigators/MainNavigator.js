import { 
    createStackNavigator, 
    createBottomTabNavigator
} from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';

import Dashboard from '../screens/Dashboard';
import AtoB from '../screens/AtoB';
import TrainList from '../screens/TrainList';
import PNRScreen from '../screens/PNRScreen';
import PNRInfo from '../screens/PNRInfo';
import TrainNumberScreen from '../screens/TrainNumberScreen';
import TrainInfo from '../screens/TrainInfo';

const AppTrainStack = createStackNavigator({
    dash: Dashboard,
    atob: AtoB,
    list: TrainList,
    pnr: PNRScreen,
    pnrinfo: PNRInfo,
    train: TrainNumberScreen,
    trainInfo: TrainInfo
});

AppTrainStack.navigationOptions = ({ navigation }) => {
    let headerMode = 'screen';
    let tabBarVisible = true;
    if(navigation.state.index > 0){
        headerMode = 'none';
        tabBarVisible = false;
    }
    return {
        initialRouteName: 'train',
        tabBarVisible,
        headerMode
    }
}

const MainNavigator = createStackNavigator({
    auth: {
        screen: AuthScreen
    },
    app: createBottomTabNavigator({
        train: AppTrainStack
        // bus: {
        //     screen: PNRScreen
        // },
        // taxi: {
        //     screen: null
        // },
        // settings: {
        //     screen: null
        // }
    },{
        initialRouteName: 'train',
        headerMode: 'none',
        navigationOptions: {

        }
    })
},{
    initialRouteName: 'app',
    headerMode: 'none',
    navigationOptions: {

    }
});

export default MainNavigator;
