import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
export default class ListBuilding extends Component {
  render() {
      const{building}=this.props.data
    return (
        <TouchableOpacity>
      <View style={styles.list}>
      <Icon style={styles.icon} name="bookmark"></Icon>
      <View style={styles.item}>   
        <Text style={styles.text}>{building}</Text>
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
        borderBottomColor: '#2b2b2b',
        borderBottomWidth: 0.2,
        paddingLeft:16,
    },
    text:{
        fontSize:16,
    }
})