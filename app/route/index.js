import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator,createSwitchNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Octicons';
import HomeScreen from './../screen/home'
import SettingScreen from './../screen/setting'
import FloorScreen from '../screen/floor';
import SearchScreen from '../screen/search';
import FloorSc from '../screen/home/Floor'
import RoomScreen from '../screen/home/Room';
import WelcomeScreen from '../screen/welcome';
import LoginScreen from '../screen/login';

const HomeTab = createStackNavigator({
  HomeStack: {screen:HomeScreen,
  navigationOptions:{
    header:null
  }},
  Floor:FloorSc,
  Room:RoomScreen,
  SearchStack: {screen:SearchScreen,
    navigationOptions:{
      header:null
    }},
  
},
{
  // headerMode: 'none'
}
);
const TabNavigator = createBottomTabNavigator({
    Home: HomeTab,  
    Setting: SettingScreen,
   
},

    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
        //   let iconName;
          if (routeName === 'Home') {
            iconName = `home${''}`;
          } else if (routeName === 'Setting') {
            iconName = `settings${''}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={32} color={tintColor}/>;
        },
      }),
      tabBarComponent: TabNavigator,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false
      },
      animationEnabled: true,
      swipeEnabled: true,
      
    }
    );
  
    const AppStack=createSwitchNavigator({
      Welcome:WelcomeScreen,
      AppTab:TabNavigator,
      Login:LoginScreen
    })
    
    export default createAppContainer(AppStack);
