import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'


export default class ListSearch extends Component {
    render() {
        const { name, img, building, color, status, detail } = this.props.data
        const verify = status ? '#2CFF1A' : '#ef7164'
        const icon = status ? 'check-circle' : 'x-circle'
        return (
            <TouchableOpacity >
                <View >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:10 }}>
                        <View style={{ width: 65, height: 65, backgroundColor: '#2b2b2b', borderRadius: 32.5, justifyContent:'center', alignItems: 'center' }}>
                        <View style={{ width: 60, height: 60, backgroundColor: '#fff', borderRadius: 30,justifyContent:'center', alignItems: 'center'}}>
                        <ImageBackground source={{uri:img}} style={{
                                        width: 55,
                                        height: 55,
                                        // backgroundColor: '#FADDDD',
                                        borderRadius: 27.5,
                                        backgroundColor: '#fff',
                                        overflow: 'hidden',
                                       
                                        alignItems: 'center',
                                    }}></ImageBackground>
                        </View>
                        </View>
                        <View style={{ marginLeft: 15, flex: 1 }}>
                            <Text  style={styles.name}>{name}</Text>
                            <Text >{name}</Text>
                            <Text style={styles.detail}>{detail}</Text>
                        </View>
                        <View>
                            <Icon name="chevron-right"></Icon>
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
        paddingBottom: 15,
        paddingTop: 15,

    },
    active: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'


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
    name: {
        fontSize: 16,
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