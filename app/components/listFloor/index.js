import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default class ListFloor extends Component {
    render() {
        const { floor, letter, building, color, status } = this.props.data
        const verify = status ? '#2CFF1A' : '#ef7164'
        const icon = status ?'check-circle': 'x-circle'
        return (
            <TouchableOpacity >
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.circle} backgroundColor="#E7DDFA" >
                            <Text style={styles.campus}>{letter}</Text>
                        </View>
                        
                            <View style={{flex:1, marginLeft:10}}>
                                <Text style={styles.building}>{building}</Text>
                                <Text style={styles.floor}>{floor} Floors</Text>
                                <View style={styles.status} backgroundColor={verify}>
                                <Icon size={11} name={icon}></Icon>
                            </View>
                            </View>
                            <View style={{justifyContent:'center', alignContent:'center'}}>
                            <Icon style={styles.icon} name="chevron-right" ></Icon>
                            </View>
                            
                        
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    card: {

        height: 80,
        backgroundColor: '#fff',
        padding: 12,
        margin: 1,
        shadowColor: '#D3D3D3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    circle: {
        width: 60,
        height: 60,
        // backgroundColor: '#FADDDD',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    campus: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        color: '#2b2b2b',
        fontFamily: 'Helvetica Neue',
    },
    building: {
        fontSize: 16,
        color: '#2b2b2b',
        fontWeight: 'bold',
    },
    text1: {
        marginTop: 42,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    floor: {
        fontSize: 12,
        color: '#2b2b2b',
    },
    status: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        justifyContent: 'center',
        alignItems: 'center',
       

    }

})