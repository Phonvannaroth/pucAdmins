import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Matfloor from './../../../components/Matfloor'
import {floorData} from './../../../dummy/floorData'

export default class FloorSc extends Component {

  _onRoom=()=>{
    this.props.navigation.navigate("Room")
}

  render() {
    return (
     <ScrollView>
       {
         floorData.map(m=>{
           return (<Matfloor onClick={this._onRoom}  data={m} />)
         })
       }
     </ScrollView>
    );
  }
}
