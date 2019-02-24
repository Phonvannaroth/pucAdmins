import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import style from '../../style'
import { recentCard } from '../../dummy/reactCard'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../style/color/index.color'
export default RecentCard = ({ text, onClick, colorsindex }) => {

    return (
        <TouchableOpacity onPress={onClick} >
            <View style={[styles.card, { backgroundColor: colors[colorsindex].color }]}
            >
                {/* <View style={[styles.card, {backgroundColor:'#fff'}]}
                > */}
                <ImageBackground source={require('../../img/cart1.png')} style={{ flex: 1, borderRadius: 5 }}>
                    <View style={styles.text}>
                        <Text style={{ color: '#fff', fontWeight: '600', fontSize: 14 }}>{text}</Text>
                    </View>
                </ImageBackground>

            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    text: {
        padding: 11
    },
    card: {
        marginLeft: 6.8,
        width: 115,
        height: 110,
        backgroundColor: '#fff',

        borderRadius: 5,
        // borderColor: '#D3D3D3',
        // borderBottomWidth: 0.5,
        // borderColor: '#D3D3D3',
        // borderWidth: 0.2,

        // borderBottomWidth: 1,
        // shadowColor: '#F27676',
        // shadowColor: '#D3D3D3',
        // shadowOffset: { width: 0, height: .1 },
        // shadowOpacity: 0.1,
        // shadowRadius: 5,
        // shadowColor: "#CFCCDC",
        // shadowOffset: {
        //     width: 0,
        //     height: 1
        // },
        // shadowRadius: 10,
        // shadowOpacity: 0.25,
        // elevation: 10,
    },

})