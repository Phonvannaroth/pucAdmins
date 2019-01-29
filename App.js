
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Route from './app/route'
import {Provider} from 'mobx-react'
import store from './app/store'
import SearchScreen from './app/screen/search'
import ProfileScreen from './app/screen/profile'
import ListFolder from './app/components/listFolder'


export default class App extends Component{
  render() {
    return (
    <Provider {...store}>
      <Route/>
    </Provider>
    );
  }
}

