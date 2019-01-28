//import liraries
import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, TextInput, Image, TouchableHighlight, View, Alert, StyleSheet, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { CheckBox } from 'react-native-elements'

import Icon from 'react-native-vector-icons/Ionicons';
import ListFolder from '../../components/listFolder'
import Modal from "react-native-modal";

import Verify from '../../elements/verify'
import TR from '../../elements/tr'
import TH from '../../elements/th'

// create a component
export default class ProfileScreen extends Component {
  
    state = {
        isModalVisible: false,
        confirm: false,
        
    };


    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    
    render() {
       

        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ height: 180, backgroundColor: '#CC61C8' }}>
                    <View style={{ marginHorizontal: 15, }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Icon size={32} name='ios-arrow-back' color='#fff' ></Icon>
                            <Text style={{ paddingHorizontal: 10, color: '#fff' }}>Back</Text>

                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
                <SafeAreaView >

                    <View style={{ flex: 1 }}>

                        <Modal isVisible={this.state.isModalVisible} style={styles.bottomModal}>

                            <View style={{ alignItems: 'center' }}>
                                <View style={{ height: 420, width: 375, backgroundColor: '#fff', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, margin: 15 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontWeight: '800', fontSize: 24, flex: 1 }}>Verification</Text>
                                        </View>
                                        <View  >
                                            <TouchableOpacity onPress={this._toggleModal}>
                                                <Icon size={32} name='ios-close' color='#333' />
                                            </TouchableOpacity >
                                        </View>

                                    </View>

                                    <Verify Ionicons='ios-ribbon' Txt='Presented' Color='gray' />
                                    <Verify Ionicons='ios-time' Txt='Late' Color='#2b2b2b' />
                                    <Verify Ionicons='ios-speedometer' Txt='Too Late' Color='purple' />
                                    <Verify Ionicons='ios-hand' Txt='Permission' Color='orange' />
                                    <Verify Ionicons='ios-sad' Txt='Absent' Color='red' />

                                    <TouchableOpacity  onPress={this._toggleModal} >
                                        <View style={styles.btnSubmit} backgroundColor='#CC61C8' >
                                            <View style={{ margin: 15 }}>
                                                <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>Cancle</Text>

                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </Modal>

                    </View>

                    <ScrollView>

                        <ListFolder />
                        <TouchableOpacity onPress={this._toggleModal} >
                            <View style={styles.button} backgroundColor='#CC61C8' >
                                <View style={{ margin: 15 }}>
                                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>Verification</Text>

                                </View>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>


                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 5
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
    btnSubmit: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        borderRadius: 10,

    }
});