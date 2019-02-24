import React, { Component } from 'react'
import { Text, Image, ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

export default ViewSchedule = ({ roomname, checkIn, checker, Time, onClick, fromTime, toTime, teacher, subject, status }) => {
    if (checkIn) return <View>
        <TouchableOpacity onPress={onClick}>
            <View style={styles.list}>
                <View style={styles.container} >
                    <View style={styles.status} backgroundColor='red' >
                        <ImageBackground source={require('../../img/card.png')} style={styles.imgback}>
                            <View style={styles.left}>
                                <Text style={styles.txtTime}>3H</Text>
                                <Text >Start at</Text>
                                <Text >{fromTime}</Text>

                            </View>
                            <View style={styles.line}>

                            </View>

                            <View style={styles.right}>
                                <Text style={styles.txtHeader}>{roomname}</Text>
                                <Text >Prof. {teacher}</Text>
                                <Text style={styles.txtSubject} >{subject}</Text>

                            </View>
                            {/* <Text style={styles.txtHeader}>{roomname}</Text>
                     
                     <Text style={styles.txtTime}>{fromTime}</Text>

                     <Text style={styles.txtHeader}>{teacher}</Text> */}

                        </ImageBackground>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    </View>

    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.list}>
                <View style={styles.container} >
                    <View style={styles.status} backgroundColor="orange">
                        <ImageBackground source={require('../../img/card.png')} style={styles.imgback}>

                            <View style={styles.left}>
                                <Text style={styles.txtTime}>3H</Text>
                                <Text >Start at</Text>
                                <Text  >{fromTime}</Text>

                            </View>
                            <View style={styles.line}>

                            </View>

                            <View style={styles.right}>
                                <Text style={styles.txtHeader}>{roomname}</Text>
                                <Text>Prof. {teacher}</Text>
                                <Text style={styles.txtSubject} >{subject}</Text>

                            </View>

                        </ImageBackground>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list: {
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#EDEFEE',
        // justifyContent: 'center', 
        // alignItems: 'center' , 
        width: 347.5, height: 129,
        borderRadius: 5
    },
    status: {
        height: 129,
        width: 5,

        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 5
    },
    txtHeader: {
        fontSize: 20,
        fontWeight: '700',
        color: '#2b2b2b',
        flex: 1,
    },
    txtTime: {
        fontSize: 26,
        fontWeight: '200',
        color: '#2b2b2b',
        flex: 1,
    },
    txtSubject: {
        fontSize: 12,
        fontWeight: '200',
        color: '#2b2b2b',
    },
    imgback: {
        width: 347.5,
        height: 129,
        overflow: 'hidden',
        padding: 12,
        flexDirection: 'row'
    },
    left: {
        width: 80,
        flexDirection: 'column'
    },
    line: {
        width: 1,
        backgroundColor: '#d3d3d3',
        marginRight: 12
    },
    right: {
        flexDirection: 'column',
        padding: 10
    }

})