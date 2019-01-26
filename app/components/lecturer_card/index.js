//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class LectureCard extends Component {
    
    render() {
        const {name} = this.props.data;
        return (
            <View style={styles.container}>
                <Text>{name}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
       width: 60,
       height: 60,
       borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default LectureCard;
