import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import style from '../../style'
import { recentCard } from '../../dummy/reactCard'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient'
import {colors} from '../../style/color/index.color'
export default RecentCard = ({ text,onClick,colorsindex }) => {
    
    return (
        <TouchableOpacity onPress={onClick} >
            <View style={[styles.card, {backgroundColor:colors[colorsindex].color}]}
                >
                <ImageBackground source={require('../../img/build.png')} style={{flex:1}}>
                <View style={styles.text}>
                    <Text style={{color:'#fff', fontWeight:'600'}}>{text}</Text>
                </View>
                </ImageBackground>
              
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    text:{
        padding:6
    },
    card: {
        marginLeft: 6.5,
        width: 85,
        height: 100,
        backgroundColor: '#fff',

        borderRadius: 6,
        // borderBottomColor: '#D3D3D3',
        // borderBottomWidth: 0.5,
        // borderColor: '#D3D3D3',
        // borderWidth: 0.1,
        // borderBottomWidth: 1,
        // shadowColor: '#F27676',
        // shadowColor: '#D3D3D3',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
    },

})