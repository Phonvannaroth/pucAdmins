import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity,SafeAreaView, Image,ImageBackground,ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { inject, observer } from 'mobx-react';
import { Icon } from 'react-native-elements';

@inject("auth")
@observer
export default class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
        }
    }

    _onLogin=()=>{
        
        const {email,password}=this.state;
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
    <ImageBackground style={{width:"100%",height:"100%"}} source={require('./../../img/du.png')}>
        <View style={{alignItems:"center", marginTop:60,}}>
        <Image style={styles.img} source={{uri:'http://www.puc.edu.kh/images/puc-logo/Logo-3.jpg'}}/>
        <Text style={{color:'#fff', paddingTop: 6,}}>Sīla, Samādhi, Pannā</Text>
        <Text style={{color:'#fff',}}>Paññāsāstra University of Cambodia</Text>
        </View>    
      <SafeAreaView style={styles.fl}>
        <View style={styles.div}>
        <TextInput
        style={styles.input}
        value={email}
        onChangeText={email=>this.setState({email})}
        placeholder="Email"
        >
        </TextInput>
         <TextInput
         style={styles.input}
        value={password}
        onChangeText={password=>this.setState({password})}
        placeholder="Password"
        secureTextEntry={true}
        />
        </View>
        <TouchableOpacity onPress={this._onLogin}>
        <LinearGradient colors={['#0082c8', '#0082c8', '#667db6',]} style={{ alignItems: 'center', marginTop: 22, borderRadius: 12, overflow: "hidden", height: 50, justifyContent: 'center', width:200, }}>  
            <Text style={styles.text} > {process?"process":"Log in"}</Text>
            </LinearGradient>
        {
        process? 
        <ActivityIndicator size="large" color="#0000ff" />
        :<View/>
        }
        </TouchableOpacity>
        <View style={{marginTop:200, flex:2}}>
        <View style={{alignItems:"center", justifyContent:"center",flexDirection:'row'}}>
        <Image style={{width: 40, height:40, borderRadius:20,}} source={{uri:'http://www.puc.edu.kh/images/puc-logo/Logo-3.jpg'}}/>
        <Text style={{fontSize:22,color:'#fff'}}> PUC ADMIN</Text>
        </View>
        <View style={{alignItems:"center", justifyContent:"center"}}>
        <Text style={{marginTop:12,color: "#fff", fontSize: 10, }}>Copyright © 2019</Text>
        <Text style={{marginTop:6, color: "#fff", fontSize: 10, }}>Develop by PUC Computer Science</Text>
        </View>
        </View>
      </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles={
    div:{
        width: 300,
        marginTop: 80,
    },
    fl:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    input:{
        borderColor: '#ebebeb',
        borderWidth: 1,
        width: '100%',
        marginTop: 12,
        height: 50,
        borderRadius: 12,
        paddingLeft: 12,
        backgroundColor: '#f6f8fa',
        fontSize: 21,
        
    },
    ERROR:{
        borderColor: 'red',
        borderWidth: 1,
    },
    Button:{
        width: 100,
        height: 40,
        backgroundColor: "#3cfc",
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    text:{
        fontSize: 28,
        color: '#FFF'
    }
}