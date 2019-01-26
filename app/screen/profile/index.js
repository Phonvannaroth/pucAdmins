//import liraries
import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, TextInput, Image, TouchableHighlight, View, Alert, StyleSheet, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { CheckBox } from 'react-native-elements'

import Icon from 'react-native-vector-icons/Ionicons';
import ListFolder from '../../components/listFolder'
import Modal from "react-native-modal";

import TR from '../../elements/tr'
import TH from '../../elements/th'

// create a component
export default class ProfileScreen extends Component {

    state = {
        isModalVisible: false,
        presented: false,
        late: false,
        tooLate: false,
        absent: false,
    };

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    render() {

        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ height: 180, backgroundColor: '#F27676' }}>
                    <View style={{ marginHorizontal: 15, }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Icon size={32} name='ios-arrow-back' color='#fff' ></Icon>
                            <Text style={{ paddingHorizontal: 10, color: '#fff' }}>Back</Text>

                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
                <SafeAreaView >

                    <View style={{ flex: 1 }}>

                        <TouchableOpacity onPress={this._toggleModal}>
                            <Text>Show Modal</Text>
                        </TouchableOpacity>

                        <Modal isVisible={this.state.isModalVisible} style={styles.bottomModal}>
                            <KeyboardAvoidingView behavior="position" enabled>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ height: 420, width: 375, backgroundColor: '#fff', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>

                                        <TouchableOpacity onPress={this._toggleModal} style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, margin: 15 }}>
                                            <Icon size={32} name='ios-close' color='#333' style={{ flex: 1 }}></Icon>
                                            <TouchableOpacity onPress={this._toggleModal} >

                                                <Icon size={32} name='ios-paper-plane' color='#333' style={{ flex: 1 }}></Icon>

                                            </TouchableOpacity>

                                        </TouchableOpacity>

                                        <CheckBox 
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        title="Presented" checked={this.state.presented} onPress={() => this.setState({ presented: !this.state.presented })}
                                        />
                                        <CheckBox 
                                         checkedIcon='dot-circle-o'
                                         uncheckedIcon='circle-o'
                                        title="Late" checked={this.state.late} onPress={() => this.setState({ late: !this.state.late })}
                                        />
                                        <CheckBox 
                                         checkedIcon='dot-circle-o'
                                         uncheckedIcon='circle-o'
                                        title="Too Late" checked={this.state.tooLate} onPress={() => this.setState({ tooLate: !this.state.tooLate })}
                                        />
                                        <CheckBox
                                         checkedIcon='dot-circle-o'
                                         uncheckedIcon='circle-o'
                                        title="Absent" checked={this.state.absent} onPress={() => this.setState({ absent: !this.state.absent })}
                                        />

                                        <TextInput style={{ height: 80, borderWidth: 0.5, borderRadius: 5, padding: 10, margin: 5, marginBottom: 5 }} multiline={true} numberOfLines={3} placeholder='Comment'></TextInput>


                                    </View>

                                </View>
                            </KeyboardAvoidingView>
                        </Modal>

                    </View>

                    <ScrollView>

                        <ListFolder />
                        <TouchableOpacity onPress={this._toggleModal} >
                            <View style={styles.button} backgroundColor='#F27676' >
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
});