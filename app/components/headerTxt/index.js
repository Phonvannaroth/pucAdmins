//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class HeaderTxt extends Component {
    render() {
        const { mainTxt, subTxt } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.main}>{mainTxt}</Text>
                <Text style={styles.sub}>{subTxt}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    main: {
        marginLeft: 15,
        fontWeight: '700',
        fontSize: 20,
        flex: 1
    },
    sub: {
        marginRight: 15,
        fontWeight: '400',
        fontSize: 14,
        color: '#2b2b2b'
    }
});

//make this component available to the app
export default HeaderTxt;
