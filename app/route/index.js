import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';
import HomeScreen from './../screen/home'
import SettingScreen from './../screen/setting'
import FloorScreen from '../screen/floor';
import SearchScreen from '../screen/search';
import FloorSc from '../screen/home/Floor'
import RoomScreen from '../screen/home/Room';
import WelcomeScreen from '../screen/welcome';
import LoginScreen from '../screen/login';
import DrawerScreen from '../screen/drawer';
import About from '../screen/about'
import ProfileScreen from '../screen/profile'
import Icon from 'react-native-vector-icons/Ionicons'

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../img/bg.jpg')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

const HomeTab = createStackNavigator({
  HomeStack: {
    screen: HomeScreen,
    navigationOptions: {header: null, headMode: 'none'}
},
  Floor: FloorSc,
  Room: RoomScreen,
  Profile: {
    screen: ProfileScreen,
    navigationOptions: { 
      header: null, headMode: 'none'
    
  },
},
  SearchStack: {
    screen: SearchScreen,
    navigationOptions: { 
      header: null, headMode: 'none'
    
  },
    
    
  },
  

},
 
);
const TabNavigator = createBottomTabNavigator({
  Home: HomeTab,
  Setting: ProfileScreen,

},

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        //   let iconName;
        if (routeName === 'Home') {
          iconName ='ios-home';
        } 
        else if (routeName === 'Setting') {
          iconName = `ios-pulse`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={32} color={tintColor} />;
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
const Mydrawer = createDrawerNavigator({
  Info: {
    screen: TabNavigator
  }
}, {
    initialRouteName: 'Info',
    contentComponent: DrawerScreen,
    drawerWidth: 340
  });
const AppStack = createSwitchNavigator({
  Welcome: WelcomeScreen,
  AppTab: Mydrawer,
  Login: LoginScreen
})

export default createAppContainer(AppStack);
