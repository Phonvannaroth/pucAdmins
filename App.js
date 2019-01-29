
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Route from './app/route'
import {Provider} from 'mobx-react'
import store from './app/store'
import TestScreen from './app/screen/test'
import CheckOut from './app/screen/checkOut'

export default class App extends Component{
  render() {
    return (
    <Provider {...store}>
      <Route/>
    </Provider>
    
    );
  }
}

