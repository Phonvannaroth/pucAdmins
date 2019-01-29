//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TH from '../../elements/th'
import TR from '../../elements/tr'



// create a component
export default class ListFolder extends Component {
    render() {
        return (
           
            <View>
            <TH Txt='Lecturer Information'/>
            <TR Ionicons='ios-person' Txt='Pro. Buth Sitha'/>
            <TR Ionicons='ios-call' Txt='086 493 926'/>
            <TR Ionicons='ios-mail' Txt='admin@gmail.com'/> 

            <TH Txt='Class Information'/>
             <TR Ionicons='ios-easel' Txt='Battambang'/>
             <TR Ionicons='ios-alarm' Txt='8:15 to 9:45 AM'/>
             <TR Ionicons='ios-bookmarks' Txt='Introduction to Computer'/>
             <TR Ionicons='ios-school' Txt='Computer Science'/> 
             <TR Ionicons='ios-people' Txt='25 Students'/> 
                       
            </View>
          
           
            


        );
    }
}


