import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, ImageBackground,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
export default class floor extends Component {
  render() {
    const{img, name, detial}=this.props
    const {onClick}=this.props;
    return (
      <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>

        <Image source={require('../img/floor.png')} style={styles.img}></Image>
        <View style={{width:2, height:40, backgroundColor:'red', borderWidth:0.3 , }}>
      <Text></Text>
        </View>
        <View style={styles.h1}>
        
          <Text style={styles.p1}>{name} </Text>
          <Text style={styles.p2}>{detial} <Icon size={12} name='ios-star' color='orange' style={{marginRight:15}} ></Icon>  Room</Text>
          
        </View>
        <Icon size={18} name='ios-arrow-forward' color='#CC61C8' style={{marginRight:15}} ></Icon>
       </View>

       </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  img:{
    width: 70,
    height: 70, 
    borderRadius:35,
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#CC61C8'
    
  },
  container:{
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
     

    },
   

    h1:{
      paddingLeft:5,
      flexDirection: 'column',
      flex:1,
    },
    p1:{
    fontSize:18,
    fontWeight: '600',
    
    },
    p2:{
      fontSize:12,
    }
})
