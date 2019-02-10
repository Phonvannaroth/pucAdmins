//import liraries
import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, TextInput, Image, TouchableHighlight, View, Alert, StyleSheet, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { CheckBox } from 'react-native-elements'

import Icon from 'react-native-vector-icons/Ionicons';
import ListFolder from '../../components/listFolder'
import Modal from "react-native-modal";
import VerifyModal from '../../components/modal/verify.js'
import Verify from '../../elements/verify'
import TR from '../../elements/tr'
import TH from '../../elements/th'
import { inject, observer } from 'mobx-react';
import { toDateKey } from '../../services/mapping';
import { createId } from '../../services/data';

// create a component
@inject("profile", "schedule","auth")
@observer
export default class ProfileScreen extends Component {
    
   
    state = {
        isModalVisible: false,
        confirm: false,
    };

    _onCheckIn=(status)=>{
        this.setState({ isModalVisible: !this.state.isModalVisible });
        const {selectedItem} = this.props.profile
        const { campus, term,account } = this.props.auth;
        const dateKey=toDateKey(new Date());
        const checkIn={
            user:account,
            checkDate:new Date(),
            checkDateKey:dateKey,
            status:status,
            campus:campus,
            term:term,
            schedule:selectedItem,
            note:null,
            key:dateKey+'_'+selectedItem.key,
            id:createId()
        }
        this.props.schedule.checkIn(checkIn,req=>{
            if(req){
                alert("Check in done!");
                this.props.navigation.navigate("HomeStack");
            }
        })
    }

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    
    render() {
    const {selectedItem} = this.props.profile
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ height: 180, backgroundColor: 'orange' }}>
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

                        <VerifyModal onClick={this._onCheckIn} close={this._toggleModal}/>

                        </Modal>

                    </View>

                    <ScrollView>

                        <ListFolder 
                        teacher={selectedItem.instructor.first_name  }
                        phone={selectedItem.instructor.mobile_phone}
                        email={selectedItem.instructor.email}
                        room={selectedItem.room.name}
                        time={ [selectedItem.session.fromHours," to ", selectedItem.session.toHours ]}
                        major={selectedItem.curriculum.major.name}
                        subject={selectedItem.schedule_subject.subject.name}
                        />
                        <TouchableOpacity onPress={this._toggleModal} >
                            <View style={styles.button} backgroundColor='orange' >
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