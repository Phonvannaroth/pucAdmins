import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity,SafeAreaView } from 'react-native'

import { inject, observer } from 'mobx-react';

@inject("auth")
@observer
export default class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }

    _onLogin=()=>{
        const {email,password}=this.state
        this.props.auth.logIn(email,password,(success,res)=>{
            if(success){
                this.props.navigation.navigate("AppTab")
            }
            else{
                alert("Invalid email and password")
            }
        })
    }

  render() {
      const {email,password}=this.state;
      const {process}=this.props.auth;
    return (
      <SafeAreaView style={styles.fl}>
        <Text> Email </Text>
        <TextInput
        style={styles.input}
        value={email}
        onChangeText={email=>this.setState({email})}
        />
         <Text> Password </Text>
         <TextInput
         style={styles.input}
        value={password}
        onChangeText={password=>this.setState({password})}
        />
        <TouchableOpacity onPress={this._onLogin}>
            <Text> {process?"Log in...":"Log in"}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles={
    fl:{
        flex: 1,
        alignItems: 'center'
    },
    input:{
        padding: 10,
        borderColor: '#ebebeb',
        borderWidth: 1,
        width: '100%'
    }
}