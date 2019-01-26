import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ImageBackground
} from 'react-native'

import { inject, observer } from 'mobx-react';
import { ScrollView } from 'react-native-gesture-handler';
import ListDrawer from '../../components/listDrawer'

@inject("auth")
@observer

export default class DrawerScreen extends Component {
    componentDidMount() {
        this.props.auth.fetchBuilding();
    }

    _onLogOut = () => {
        this.props.auth.logOut();
    }

    _onBuilding = () => {
        this.props.navigation.navigate("Floor")
    }
    render() {
        const { displayName, campus, email } = this.props.auth.account;
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    {/* <ImageBackground source={require('../../img/dbg.png')} style={styles.imgbg}> */}
                        <SafeAreaView style={{ margin: 12 }}>
                            <Image source={require('../../img/p3.jpg')} style={styles.imgs} />

                            <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
                                <Text style={styles.htext}>{displayName}</Text>
                                <Text style={styles.text}>{email}</Text>
                            </View>

                        </SafeAreaView>
                    {/* </ImageBackground> */}

                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                   <View style={styles.bodersty}>
                   <Text style={styles.dtext}>General Labels</Text>
                    <ListDrawer name="Contact" icon="ios-person" colors="gray"></ListDrawer>
                    <ListDrawer name="Filter" icon="ios-leaf" colors="gray"></ListDrawer>
                    </View>
                    <View style={styles.bodersty}>
                    <Text style={styles.dtext}>Management</Text>
                    <ListDrawer name="Overview" icon="ios-clipboard" colors="gray"></ListDrawer>
                    <ListDrawer name="Schedules" icon="ios-calendar" colors="gray"></ListDrawer>
                    <ListDrawer name="Booking" icon="ios-bookmarks" colors="gray"></ListDrawer>
                    <ListDrawer name="Reports" icon="ios-remove-circle" colors="gray" bgcolor="red"></ListDrawer>
                    </View>
                    <Text style={styles.dtext}>Account</Text>
                    <ListDrawer name="Settings" icon="ios-options" colors="gray" bgcolor="red"></ListDrawer>
                    <ListDrawer name="Log Out" icon="ios-log-out" colors="gray" route={this._onLogOut}></ListDrawer>
                    
                    

                </ScrollView>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f9f9',

    },
    header: {
        height: 175,
        backgroundColor: '#CC61C8',

    },
    imgs: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 10
    },
    imgbg: {
        height: 175,
        overflow: 'hidden',
        opacity: 0.9,
    },
    htext: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    text: {
        color: '#fff',
        fontWeight: '400',
    },
    dtext:{
             marginHorizontal:15,
             marginTop: 10,
             fontSize: 16,
             color: "lightgray",
    },
    bodersty:{
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.5,
    borderRightColor: '#D3D3D3',
    borderRightWidth: 0.5,
    shadowColor: '#d6d7da',
}

})
