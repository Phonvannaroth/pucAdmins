import React, { Component } from 'react'
import { TextField } from 'react-native-material-textfield';
import { Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity, SafeAreaView, Image, ImageBackground, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {
    // BallIndicator,
    // BarIndicator,
    // DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    // SkypeIndicator,
    // UIActivityIndicator
    // WaveIndicator
} from 'react-native-indicators';
import { inject, observer } from 'mobx-react';
import { Icon } from 'react-native-elements';
@inject("auth")
@observer

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    _onLogin = () => {

        const { email, password } = this.state;
        this.props.auth.logIn(email, password, (success, res) => {
            if (success) {
                this.props.navigation.navigate("Wellcome")
            }
            else {
                alert("Invalid email and password")
            }
        })
    }
    render() {
        const { email, password } = this.state;
        const { process } = this.props.auth;
        return (

            <View style={{ flex: 1 }}>
                <View style={{
                    alignItems: "center",
                    backgroundColor: '#0070c9',
                    // shadowColor: "#CFCCDC",
                    shadowColor: "#EDEFEE",
                    shadowOffset: {
                        width: 0,
                        height: 10
                    },
                    shadowRadius: 10,
                    shadowOpacity: 0.6,
                    elevation: 10,
                }}>
                    <Image style={styles.img} source={require('../../img/Logo.jpg')} />


                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600', marginTop: 10, marginBottom: 20 }}>PUC Administrator</Text>
                </View>


                <KeyboardAvoidingView style={styles.fl} behavior="padding" enabled>

                    <View style={styles.div}>

                        <TextField
                            label="Email"
                            baseColor="#2b2b2b"
                            value={email}
                            onChangeText={email => this.setState({ email })}
                        // placeholder="Email"

                        >
                        </TextField>
                        <TextField

                            label="Password"
                            baseColor="#2b2b2b"
                            value={password}
                            onChangeText={password => this.setState({ password })}

                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity onPress={this._onLogin}>
                        <LinearGradient colors={['#0070c9', '#FFB51C', '#667db6',]} style={{ alignItems: 'center', marginTop: 22, borderRadius: 25, overflow: "hidden", height: 50, justifyContent: 'center', width: 300, }}>
                            <LinearGradient colors={['#fff', '#fff', '#fff',]} style={{ alignItems: 'center', borderRadius: 29, overflow: "hidden", height: 48, justifyContent: 'center', width: 299, }}>

                                {
                                    process ?
                                        <MaterialIndicator size={18} color='#0070c9' />
                                        : <View>
                                            <Text style={styles.text} > {process ? "" : "Log in"}</Text>
                                        </View>
                                }
                            </LinearGradient>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={{ marginTop: 150, flex: 2 }}>

                        <View style={{ alignItems: "center", justifyContent: "center" }}>

                            <Text style={{ marginTop: 2, color: "#2b2b2b", fontSize: 10, }}>All rights reserved.</Text>
                            <Text style={{ marginTop: 6, color: "#2b2b2b", fontSize: 10, }}>Developed by PUC Computer Science</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>

            </View>

        )
    }
}

const styles = {
    div: {
        width: 300,
        marginTop: 90,
    },
    fl: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    img: {
        marginTop: 50,
        width: 110,
        height: 110,
        borderRadius: 55,
    },
    input: {
        borderColor: '#ebebeb',
        borderWidth: 1,
        width: '100%',
        marginTop: 22,
        height: 50,
        borderRadius: 12,
        paddingLeft: 12,
        backgroundColor: '#f6f8fa',
        fontSize: 21,

    },
    ERROR: {
        borderColor: 'red',
        borderWidth: 1,
    },
    Button: {
        width: 100,
        height: 40,
        backgroundColor: "#3cfc",
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    text: {
        fontSize: 24,
        fontWeight: '500',
        color: '#0070c9'
    }
}