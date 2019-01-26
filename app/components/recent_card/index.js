import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native'
import style from '../../style'
import {recentCard} from '../../dummy/reactCard'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient'

export default class RecentCard extends Component {

    render() {
       
        // const textStatus = this.test.text? 'Unverify': 'Verify'
        const { floor, letter, building, color,status} = this.props.data
        const {onClick} = this.props
        const verify = status ?'#2CFF1A': '#ef7164'
        const icon = status ?'ios-checkmark': 'ios-close'
        
        return (
           
            <TouchableOpacity onPress={onClick} >
            <View style={styles.card} backgroundColor='#fff'>
            <View style={styles.circle} backgroundColor={color} >
            {/* <LinearGradient style={styles.circle} 
            colors={['#E7DDFA','#BCFF9F',]} 
            start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }}>
    */}
  <Image source={require('../../img/icon.png')} style={{width:60,height:60}}></Image>
                {/* <Text style={styles.campus}>{letter}</Text> */}
                {/* <Icon style={{color:'#2c2c2c'}} name="ios-business" size={32}></Icon> */}
                {/* </LinearGradient> */}
            </View>
            <View style={styles.text1}>
            <View style={{flex:1}}>
                <Text style={styles.building}>{building}</Text>
                <Text style={styles.floor}>{floor} Floors</Text>
                </View>
                <View style={styles.status} backgroundColor={verify}>
                <Icon size={15} name={icon} color={'#2b2b2b'}></Icon>
                </View>
            </View>
        </View>
        </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 5,
        
        width: 165,
        height: 165,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 15,
        // borderBottomColor: '#D3D3D3',
        // borderBottomWidth: 0.5,
        // borderRightColor: '#D3D3D3',
        // borderRightWidth: 0.5,
        shadowColor: '#F27676',
        // shadowColor: '#D3D3D3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    circle: {
        width: 70,
        height: 70,
        // backgroundColor: '#FADDDD',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems:'center',
    },
    campus: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems:'center',
        color: '#2b2b2b',
        fontFamily: 'Helvetica Neue',
    },
    building: {
        fontSize:16,
        color: '#2b2b2b',
        fontWeight: 'bold',
    },
    text1:{
    marginTop:42,
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    },
    floor: {
        fontSize:12,
        color: '#2b2b2b',
    },
    status:{
        width:15,
        height: 15,
        borderRadius:7.5,
        justifyContent: 'center',
        alignItems: 'center',       
        borderColor: '#2b2b2b',
        borderWidth:  0.5,   
        shadowColor: '#d6d7da',
            
    }
})