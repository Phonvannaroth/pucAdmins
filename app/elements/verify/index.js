//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
class Verify extends Component {
    render() {
        const {Ionicons, Txt, Color, onClick} = this.props
        return (
            <TouchableOpacity onPress={onClick}>
            <View style={styles.sub} >
                <View style={styles.list}>
                    <Icon size={24} name={Ionicons} color={Color} style={{ flex: 1 }}></Icon>
                    <Text style={styles.txt}>{Txt}</Text>
                    {/* <Icon size={24} name='ios-checkbox-outline' color={Color} ></Icon> */}
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    sub: {
        height: 50,
        justifyContent: 'center',
    },
    list: {
        height: 50,
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EDEFEE'
    },
    txt: {
        fontSize: 14,
        fontWeight: '400',
        color: '#2b2b2b',
        width: 300
    }
});

//make this component available to the app
export default Verify;
