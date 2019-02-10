import React, { Component } from 'react'
import { Text, Image, ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

export default ViewSchedule = ({ roomname, checkIn, checker, Time, onClick, fromTime, toTime, teacher, subject,status }) => {
    if (checkIn) return <View>
        <TouchableOpacity onPress={onClick}>
        <View style={styles.list}>
            <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>

                <ImageBackground source={require('../../img/schedule.png')} style={{ width: 45, height: 45, overflow: 'hidden' }}></ImageBackground>
                <View style={{ margin: 10, height: 30, borderRadius: 5, justifyContent: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 24, fontWeight: '200' }}>Prof. {teacher}</Text>
                </View>
                <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', margin: 10, paddingLeft: 10, paddingRight: 10, height: 30, borderRadius: 5 }}>
                    <Text style={{ color: '#fff' }}>{status}</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={{ flexDirection: 'column', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ color: 'red' }}></Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: -15 }}>
                        <Text style={styles.text} >{fromTime} to {toTime}</Text>

                    </View>
                    <View style={{ marginBottom: 20, flexDirection: 'row', }}>
                        <Icon name="ios-checkbox-outline" size={18} style={{ marginRight: 10 }}></Icon>
                        <Text style={{ color: 'gray' }}>{roomname} by {checker}  </Text>
                    </View>
                    {/* <Text style={{ marginBottom: 20, fontWeight: '200' }}>{roomname}</Text> */}
                    <Text style={{ fontSize: 16, fontWeight: '200' }}>( {subject} )</Text>
                </View>



            </View>
        </View>
        </TouchableOpacity>

    </View>

    return (
        <TouchableOpacity onPress={onClick}>
             <View style={styles.list}>
            <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>

                <ImageBackground source={require('../../img/schedule.png')} style={{ width: 45, height: 45, overflow: 'hidden' }}></ImageBackground>
                <View style={{ margin: 10, height: 30, borderRadius: 5, justifyContent: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 24, fontWeight: '200' }}>Prof. {teacher}</Text>
                </View>
                <View style={{ backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', margin: 10, paddingLeft: 10, paddingRight: 10, height: 30, borderRadius: 5 }}>
                    <Text style={{ color: '#fff' }}>Not Check</Text>
                    
                </View>
            </View>
            <View style={styles.item}>
                <View style={{ flexDirection: 'column', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ color: 'red' }}></Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: -15 }}>
                        <Text style={styles.text} >{fromTime} to {toTime}</Text>

                    </View>
                    <View style={{ marginBottom: 20, flexDirection: 'row', }}>
                        
                        <Text style={{ color: '#2b2b2b' }}>{roomname}</Text>
                    </View>
                    {/* <Text style={{ marginBottom: 20, fontWeight: '200' }}>{roomname}</Text> */}
                    <Text style={{ fontSize: 16, fontWeight: '200' }}>( {subject} )</Text>
                </View>



            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    profText: { fontSize: 24, fontWeight: '200' },
    centerRow: { flexDirection: 'row', display: 'flex', alignItems: 'center', },
    list: {
        height: 150,
        display: 'flex',
        // flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomColor: "#f7f9fa",
        borderBottomWidth: 10,
        // borderTopColor: "#f7f9fa",
        // borderTopWidth: 5,

    },
    listVerify: {
        height: 65,
        display: 'flex',
        justifyContent: 'center',
        // flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 12,

        borderBottomColor: "#f7f9fa",
        borderBottomWidth: 10,
        // borderTopColor: "#f7f9fa",
        // borderTopWidth: 5,

    },
    icon: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#CC61C8',
    },
    item: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',



    },
    text: {
        fontSize: 16,


        fontWeight: '700'

    },
    textVerify: {
        fontSize: 20,

        fontWeight: '400'

    },
    c1: {
        width: 56,
        height: 56,
        backgroundColor: '#CC61C8',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    c2: {
        width: 52,
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
    }
})