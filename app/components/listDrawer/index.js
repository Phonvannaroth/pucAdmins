import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'

export default class ListDrawer extends Component {
  render() {
      const{name, icon, colors, bgcolor, route}=this.props
    return (
        <TouchableOpacity onPress={route}>
      <View style={styles.list}>
      
      <Icon style={styles.icon} name={icon} color ={colors} backgroundColor={bgcolor}></Icon>
      
      <View style={styles.item}>   
        <Text style={styles.text}>{name}</Text>
       
        </View>
      </View>
      </TouchableOpacity>
      )
  }
}
const styles = StyleSheet.create({
    list:{
        height: 62,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft:18,
        paddingRight: 18,
        alignItems:'center',
    },
    icon:{
        fontSize:28,
       
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
        fontWeight: '300'
    },
    
})