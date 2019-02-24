//import liraries
import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import COLORS from '../../style/color'
import style from '../../style'
import Header from '../../components/header'
import RecentCard from '../../components/recent_card'
import List from '../../components/list'
import { recentCard } from '../../dummy/reactCard'
import { listBuilding } from '../../dummy/listBuilding'
import ViewSchedule from '../../components/viewSchedule'
import Clock from '../../components/clock'
import moment from 'moment'

import { inject, observer } from 'mobx-react';
import { currentHourToNumber, hourSchedule, currentDay, toHourSchedule, toDateKey, toCalendar } from '../../services/mapping';

@inject("auth", "building", "schedule", "room", 'floor', "profile")
@observer
export default class BookingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTime: new Date(),
            dateKey: toDateKey(new Date())
        }
    }
    

    _onSearch = () => {
        this.props.navigation.navigate("SearchStack")
    }

    render() {
        const numColumns = 50;

        const { displayName, campus } = this.props.auth.account;
        const { building } = this.props.building;
        const { checkedData } = this.props.schedule;
        return (
            <View>
            <SafeAreaView style={[style.container, style.background]}>
                <View style={style.homeheader}>
                    <Header
                        drawer={() => this.props.navigation.openDrawer()}
                        name={displayName} campus={campus.name}
                        onClick={() => this.props.navigation.navigate('SearchStack')}
                        search={this._onSearch}
                    />
                   
                </View>

                <View style={{width:375, height:350, backgroundColor:'#fff', justifyContent:'center', alignItems: 'center'}}>
                <ImageBackground source={require('../../img/develop.png')} style={{height:150, width:150}}>

                </ImageBackground>

                <Text style={{fontSize:20, fontWeight:'600', color: '#333', marginTop: 10}}>Developing</Text>


                </View>

               
              
            </SafeAreaView>
            
         </View>
        );
    }
}
