import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, View } from 'react-native'
import MatRoom from './../../../components/MatRoom'
import {floorData} from './../../../dummy/roomData'

import { inject, observer } from 'mobx-react';

@inject("auth")
export default class RoomScreen extends Component {
  componentDidMount() {
    this.props.auth.fetchBuilding();
}

_onProfile = () => {
    this.props.navigation.navigate("Profile")
}
  render() {
   
    return (
        <ScrollView>
        {
          floorData.map(m=>{
            return (<MatRoom onClick={this._onProfile} data={m} />)
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
