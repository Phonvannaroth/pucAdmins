//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// create a component

export default class Clock extends Component {
    render() {
        const { day, date, time, color, dayimg } = this.props
        // const img = 'friday'

        if (color == 'Sunday')
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../img/sunday.png')} style={styles.icon} >

                        <View style={styles.clock}>
                            <View style={{ flex: 1 }}>

                            </View>
                            <View>
                                <Text style={styles.day}>{day}</Text>
                                <Text style={styles.date}>{date}</Text>
                                <Text style={styles.time}>{time}</Text>

                            </View>

                        </View>
                    </ImageBackground>
                </View>
            );
            if (color == 'Monday')
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../img/monday.png')} style={styles.icon} >

                        <View style={styles.clock}>
                            <View style={{ flex: 1 }}>

                            </View>
                            <View>
                                <Text style={styles.day}>{day}</Text>
                                <Text style={styles.date}>{date}</Text>
                                <Text style={styles.time}>{time}</Text>

                            </View>

                        </View>
                    </ImageBackground>
                </View>
            );   
            if (color == 'Tuesday')
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../img/tuesday.png')} style={styles.icon} >

                        <View style={styles.clock}>
                            <View style={{ flex: 1 }}>

                            </View>
                            <View>
                                <Text style={styles.day}>{day}</Text>
                                <Text style={styles.date}>{date}</Text>
                                <Text style={styles.time}>{time}</Text>

                            </View>

                        </View>
                    </ImageBackground>
                </View>
            );   
            if (color == 'Wednesday')
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../img/wednesday.png')} style={styles.icon} >

                        <View style={styles.clock}>
                            <View style={{ flex: 1 }}>

                            </View>
                            <View>
                                <Text style={styles.day}>{day}</Text>
                                <Text style={styles.date}>{date}</Text>
                                <Text style={styles.time}>{time}</Text>

                            </View>

                        </View>
                    </ImageBackground>
                </View>
            );  
            if (color == 'Thursday')
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../img/thursday.png')} style={styles.icon} >

                        <View style={styles.clock}>
                            <View style={{ flex: 1 }}>

                            </View>
                            <View>
                                <Text style={styles.day}>{day}</Text>
                                <Text style={styles.date}>{date}</Text>
                                <Text style={styles.time}>{time}</Text>

                            </View>

                        </View>
                    </ImageBackground>
                </View>
            );
            if (color == 'Friday')
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../img/friday.png')} style={styles.icon} >

                        <View style={styles.clock}>
                            <View style={{ flex: 1 }}>

                            </View>
                            <View>
                                <Text style={styles.day}>{day}</Text>
                                <Text style={styles.date}>{date}</Text>
                                <Text style={styles.time}>{time}</Text>

                            </View>

                        </View>
                    </ImageBackground>
                </View>
            );       
        return (
            <View style={styles.container}>
                    <ImageBackground source={require('../../img/saturday.png')} style={styles.icon} >

                        <View style={styles.clock}>
                            <View style={{ flex: 1 }}>

                            </View>
                            <View>
                                <Text style={styles.day}>{day}</Text>
                                <Text style={styles.date}>{date}</Text>
                                <Text style={styles.time}>{time}</Text>

                            </View>

                        </View>
                    </ImageBackground>
                </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: '#f7f9f9',
        marginHorizontal: 8,
        borderRadius: 10,
    },
    icon: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    clock: {
        flex: 1,
        flexDirection: 'row',
        padding: 12
    },
    day: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 24
    },
    date: {
        color: '#fff',
        fontWeight: '100',
        fontSize: 12
    },
    time: {
        color: '#fff',
        fontWeight: '100',
        fontSize: 54
    }

});

