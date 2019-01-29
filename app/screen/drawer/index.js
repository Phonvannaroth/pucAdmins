import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
    FlatList,
    ImageBackground
} from 'react-native'

import { inject, observer } from 'mobx-react';
import { ScrollView } from 'react-native-gesture-handler';
import ListDrawer from '../../components/listDrawer'

@inject("auth", "institutes")
@observer

export default class DrawerScreen extends Component {
    componentDidMount() {
        this.props.auth.fetchBuilding();
        this.props.institutes.fetchInstitutes();
    }

    _onLogOut = () => {
        this.props.auth.logOut();
    }

    _onInstitutes = () => {
        // this.props.navigation.navigate("Floor")
    }
    render() {
        const { displayName, campus, email } = this.props.auth.account;
        const { data } = this.props.institutes;
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
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.dtext}>Academic Program</Text>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <ListDrawer onClick={this._onBuilding} name={item.name} icon='ios-journal' colors='gray' />}

                        />

                    </View>
                    <View style={styles.bodersty}>
                        <Text style={styles.dtext}>Management</Text>
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
    dtext: {
        marginHorizontal: 15,
        marginTop: 10,
        fontSize: 16,
        color: "#CC61C8",
        fontSize: 18,
        fontWeight: '600',
    },
    bodersty: {
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.5,
        borderRightColor: '#D3D3D3',
        borderRightWidth: 0.5,
        shadowColor: '#d6d7da',
    }

})
