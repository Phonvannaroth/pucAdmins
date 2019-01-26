//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Feather';
import style from '../../style'
import ListFloor from '../../components/lecturer'
import {listBuilding} from '../../dummy/listBuilding'

// create a component
class SettingScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <View style={{margin:10}}>
            <View style={{height:50, flexDirection:'row'}}>
            <View style={{flex:1}}>
            <Text style={style.h}>Steel Building</Text>
            <Text style={style.p}>Show unverified rooms</Text>
            </View>
            <Ionicons name="toggle-left" size={32} color="#2b2b2b" />
            </View>
                <ScrollView>
               
               
                </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#f7f9f9',
    },
});

//make this component available to the app
export default SettingScreen;
