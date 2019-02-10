import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'


export default class ListLecture extends Component {
    render() {
        const { name, img, building, color, status } = this.props.data
        const {onClick} = this.props
        const verify = status ? '#2CFF1A' : '#ef7164'
        const icon = status ? 'check-circle' : 'x-circle'
        return (
            <TouchableOpacity onPress={onClick}>
                <View style={styles.card}>
                    
                        <View style={styles.active} backgroundColor={status}>
                            <View style={styles.circle} backgroundColor="#CC61C8">
                                <View style={{
                                    width: 55,
                                    height: 55,
                                    // backgroundColor: '#FADDDD',
                                    borderRadius: 27.5,
                                    backgroundColor: '#fff',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }} >
                                    <ImageBackground source={{uri:img}} style={{
                                        width: 50,
                                        height: 50,
                                        // backgroundColor: '#FADDDD',
                                        borderRadius: 25,
                                        backgroundColor: '#fff',
                                        overflow: 'hidden',
                                       
                                        alignItems: 'center',
                                    }}>
                                    </ImageBackground>

                                </View>

                            </View>
                            <Text style={styles.floor}>{name}</Text>
                           
                        </View>

                        
                           
                          
                     
                   

                    
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    card: {

        height: 80,
        width: 70,
  
        paddingBottom:  15,
        paddingTop: 15,
    
     
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    circle: {
        width: 60,
        height: 60,
        // backgroundColor: '#FADDDD',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,

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
        fontSize: 11,
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