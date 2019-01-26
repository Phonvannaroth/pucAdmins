//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class TH extends Component {
    render() {
        const {Txt} = this.props
        return (
            <View style={styles.headertop} >
                <Text style={styles.txtheadertop}>{Txt}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    headertop: {
        height: 50,
        backgroundColor: '#EDEFEE',
        justifyContent: 'center',
        padding: 15
    },
    txtheadertop: {
        fontWeight: '600',
    },
});

//make this component available to the app
export default TH;
