import React, { Component } from 'react'

import { Text,Image, StyleSheet, View, ImageBackground,TouchableOpacity } from 'react-native'

    return (

      <TouchableOpacity onPress={onClick}>
      <View style={styles.flex}>
      <View style={styles.profile}>  
      <View style={styles.profile}>
      <Image source={require('../img/room.png')} style={{width:45,height:45}}></Image>
        
        <View style={styles.h1}>
          <Text style={styles.p1}>{name}</Text>
          <Text style={styles.p2}>LCD:{Lcd} Student:{student} Prof:{Prof}</Text>
          <View style={styles.activepoint}></View>
        </View>
       </View>
       </View>
       </View>
       </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    img:{
      width: 70,
      height: 70, 
      borderRadius:35,
      overflow: "hidden",
      justifyContent: 'center',
      
    },
      flex:{
          backgroundColor: '#f8f9fa',
          height: 90,
          padding: 12,
          display: 'flex',
  
      },
      activepoint:{
        width:20,
        height: 20,
        borderRadius:10 ,
        backgroundColor: '#42b72a',
        borderColor: '#fff',
        borderWidth: 2,
        
      },
      profile:{
        width:100,
        height: 100,
        flexDirection: 'row',
      },
      h1:{
        paddingLeft: 21,
        width: 400,
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
  
