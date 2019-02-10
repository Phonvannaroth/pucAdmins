//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TH from '../../elements/th'
import TR from '../../elements/tr'



// create a component
export default class ViewFolder extends Component {
    render() {
        const { teacher, phone, room, email, time, major, subject, status } = this.props
        return (

            <View>
                <TH Txt='Professor Information' />
                <TR Ionicons='ios-person' Txt={teacher} />
                <TR Ionicons='ios-call' Txt={phone} />
                <TR Ionicons='ios-mail' Txt={email} />
                <TR Ionicons='ios-stats' Txt={status} />
                <TH Txt='Class Information' />
                <TR Ionicons='ios-easel' Txt={room} />
                <TR Ionicons='ios-alarm' Txt={time} />
                <TR Ionicons='ios-school' Txt={major} />
                <TR Ionicons='ios-bookmarks' Txt={subject} />        
                <TR Ionicons='ios-people' Txt='25 Students' />

            </View>





        );
    }
}


