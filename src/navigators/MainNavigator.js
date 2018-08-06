import { 
    createStackNavigator, 
    createBottomTabNavigator
} from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';
import AtoB from '../screens/AtoB';
import TrainNumberScreen from '../screens/TrainNumberScreen';
import PNRScreen from '../screens/PNRScreen';
import TrainList from '../screens/TrainList';

const AtoBStack = createStackNavigator({
    atob: AtoB,
    list: TrainList
});

AtoBStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if(navigation.state.index > 0)
        tabBarVisible = false;
    return {
        tabBarVisible
    };
};

const MainNavigator = createStackNavigator({
    auth: {
        screen: AuthScreen
    },
    dashboard: createBottomTabNavigator({
        home: AtoBStack,
        train: {
            screen: TrainNumberScreen
        },
        bus: {
            screen: PNRScreen
        },
        // taxi: {
        //     screen: null
        // },
        // settings: {
        //     screen: null
        // }
    },{
        initialRouteName: 'home',
        navigationOptions: {

        }
    })
},{
    initialRouteName: 'dashboard',
    headerMode: 'none',
    navigationOptions: {
    }
});

export default MainNavigator;
