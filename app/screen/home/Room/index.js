import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, View } from 'react-native'
import MatRoom from './../../../components/MatRoom'
import {floorData} from './../../../dummy/roomData'
export default class RoomScreen extends Component {
  render() {
    return (
        <ScrollView>
        {
          floorData.map(m=>{
            return (<MatRoom  data={m} />)
          })
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})
