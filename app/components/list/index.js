import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'

export default class ListBuilding extends Component {
  render() {
      const{name}=this.props
    return (
        <TouchableOpacity>
      <View style={styles.list}>
      <View style={styles.profile}>
      </View>
      <View style={styles.item}>   
        <Text style={styles.text}>{name}</Text>
        <Icon style={styles.icon} name="chevron-right"></Icon>
        </View>
      </View>
      </TouchableOpacity>
      )
  }
}
const styles = StyleSheet.create({
    list:{
        height: 64,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft:12,
        paddingRight: 12,
        alignItems:'center',
    },
    icon:{
        fontSize:32,
        color: '#2b2b2b',
    },
    item:{
        flex: 2,
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft:16,
    },
    text:{
        fontSize:16,
    },
    profile:{
        width:45,
        height: 45,
        backgroundColor: '#333',
        borderRadius: 22.5,
    }
})