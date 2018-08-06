import { 
    createStackNavigator, 
    createBottomTabNavigator,
    NavigationActions
} from 'react-navigation';
import React, { Component } from 'react';

import AuthScreen from '../screens/AuthScreen';
import AtoB from '../screens/AtoB';
import TrainNumberScreen from '../screens/TrainNumberScreen';
import PNRScreen from '../screens/PNRScreen';
import TrainList from '../screens/TrainList';

let appNavRef;

// const MainNavigator = createStackNavigator({
//     auth: {
//         screen: AuthScreen
//     },
//     dashboard: createBottomTabNavigator({
//         home: createStackNavigator({
//             atob: { screen: AtoB }
//         }),
//         train: {
//             screen: TrainNumberScreen
//         },
//         bus: {
//             screen: PNRScreen
//         },
//         // taxi: {
//         //     screen: null
//         // },
//         // settings: {
//         //     screen: null
//         // }
//     },{
//         initialRouteName: 'home',
//         navigationOptions: {

//         }
//     })
// },{
//     initialRouteName: 'dashboard',
//     headerMode: 'none',
//     navigationOptions: {
//     }
// });

const AtoBStack = createStackNavigator({
    atob: { screen: appNavRef => <AtoB appNavRef /> }
});

const RootTabBar = createBottomTabNavigator({
    home: { screen: AtoBStack }
});

class RootTabBarRenderer extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return <RootTabBar />;
    }
}

const AppNav = createStackNavigator({
    stack1: { screen: RootTabBarRenderer },
    list: { screen: TrainList }
});

class MainNavigator extends Component {
    render() {
        return (
            <AppNav ref={navigatorRef => {
                appNavRef = navigatorRef
            }} />
        );
    }
}

export default MainNavigator;
