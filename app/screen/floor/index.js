//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import List from '../../components/list'

// create a component
class FloorScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container} >
                 <List icons="bookmark" text="Last Building" />
                        <List icons="bookmark" text="Conner Building" />
                        <List icons="bookmark" text="Store Building" />
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#f7f9f9',
    },
});

//make this component available to the app
export default FloorScreen;
