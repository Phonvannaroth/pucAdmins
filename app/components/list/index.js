import React, { Component } from 'react'
import { Text,Image,ImageBackground, View,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

export default class ListBuilding extends Component {
  render() {
      const{name}=this.props
      const {onClick} = this.props
    return (
        <TouchableOpacity onPress={onClick}>
      <View style={styles.list}>
      {/* <View style={styles.c1}>
      <View style={styles.c2}> */}
      {/* <Icon style={{color:'#fff'}} name="ios-business" size={24}></Icon> */}
      <ImageBackground source={require('../../img/b.png')} style={{width:50,height:50, overflow:'hidden'}}></ImageBackground>
      {/* </View>
      </View> */}
      <View style={styles.item}>   
        <Text style={styles.text}>{name}</Text>
        <Icon style={styles.icon} name="ios-arrow-forward"></Icon>
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
        fontSize:18,
        fontWeight: 'bold',
        color: '#CC61C8',
    },
    item:{
        flex: 2,
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft:22,
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 0.8,
        margin: 5,
        height: 50,
        
    },
    text:{
        fontSize:16,
    },
    c1:{
        width:56,
        height: 56,
        backgroundColor: '#CC61C8',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    c2:{
        width:52,
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
    }
})