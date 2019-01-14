//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Feather';

// create a component
class Header extends Component {
    render() {
        const { img, name, campus, onClick,search, drawer } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity  onPress={drawer}>
                    <Ionicons name="align-left" size={32} color="#2b2b2b" />
                    </TouchableOpacity>
                    <View style={styles.middleHeader}>
                        <View style={styles.center}>
                           
                            <Text style={styles.user}>{name}</Text>
                            <Text style={styles.campus}>{campus}</Text>
                        </View>
                    </View>
                    <TouchableOpacity  onPress={search}>
                        <Ionicons name="search" size={32} color="#2b2b2b" />
                    </TouchableOpacity>
                </View>
            </View>
            
        );
    }
}

// define your styles
// const styles = StyleSheet.create({
//     middleHeader: {
//         flex: 1,
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 10,

//     },
//     header: {
//         flexDirection: 'row',

//     },
//     user: {
//         color: '#2b2b2b',
//         fontSize: 18,
//         fontWeight: '600',
//         marginBottom: 5,
//         fontFamily: 'Helvetica Neue'
//     },
//     campus: {
//         color: '#649E09',
//         fontSize: 12
//     },
//     center: {
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });
const styles = StyleSheet.create({
    middleHeader: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#fff'

    }, 
    header: {
        flexDirection: 'row',

    },
    user: {
        color: '#2b2b2b',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        fontFamily: 'Helvetica Neue'
    },
    campus: {
        color: '#649E09',
        fontSize: 12
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//make this component available to the app
export default Header;
