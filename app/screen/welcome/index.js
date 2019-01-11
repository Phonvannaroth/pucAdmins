import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { inject, observer } from 'mobx-react';

@inject("auth")
@observer
export default class WelcomeScreen extends Component {

componentDidMount(){
    this.props.auth.fetchAuthStateChange(user=>{
        if(user){
            this.props.navigation.navigate("AppTab")
        }
        else{
            this.props.navigation.navigate("Login")
        }
    })
}
  render() {
    return (
      <View>
        <Text>Welcome</Text>
      </View>
    )
  }
}
