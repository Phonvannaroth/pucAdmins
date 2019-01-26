import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, ImageBackground,TouchableOpacity } from 'react-native'

export default class floor extends Component {
  render() {
    const{img, name, detial}=this.props.data
    const {onClick}=this.props;
    return (
      <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>

        <Image source={require('../img/floor.png')} style={styles.img}></Image>
        
        <View style={styles.h1}>
          <Text style={styles.p1}>{name} </Text>
          <Text style={styles.p2}>{detial} Room</Text>
          
        </View>
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
      paddingLeft: 21,
      flexDirection: 'column',
    },
    p1:{
    fontSize:18,
    fontWeight: '600',
    
    },
    p2:{
      fontSize:12,
    }
})
