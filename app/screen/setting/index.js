//import liraries
import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';
import HeaderTxt from '../../components/headerTxt'
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

// @inject("auth", "building", "schedule", "room", 'floor', "profile")
@inject("auth",  "listschedule", "room", 'floor', "profile")
@observer
export default class SettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTime: new Date(),
            dateKey: toDateKey(new Date())
        }
    }
    componentDidMount() {
        const { campus, term } = this.props.auth;
        // this.props.building.fetchBuilding(campus.key);
        this.props.listschedule.fetchCheckedData(term.key, campus.key, hourSchedule(), currentDay())
        setInterval(() => {
            this.setState({
                curTime: new Date()
            })
        }, 1000)
    }

    _onLogOut = () => {
        this.props.auth.logOut();
    }
    _onRoom = (item) => {

        this.props.profile.fetchSelectedRoom(item)
        this.props.navigation.navigate("ViewSchedule")
    }
    renderItem = (item) => {
        const checkIn = item[this.state.dateKey];
        const checkMan = item[this.state.dateKey]?item[this.state.dateKey].user.displayName: null;
        console.log(checkMan)
        if (checkIn) {
            const { checkDate } = checkIn;
            const dateMemo = toCalendar(checkDate);
            return <ViewSchedule
                onClick={() => this._onRoom(item)}
                checkIn={dateMemo}
                roomname={item.room.RoomName}
                Time={item.session.fromHours}
                fromTime={item.session.fromHours}
                toTime={item.session.toHours}
                teacher={item.instructor.full_name}
                subject={item.schedule_subject.subject.name}
                checker={checkMan}
                status={item[this.state.dateKey].status.text?item[this.state.dateKey].status.text: 'Not Check' }
               
            />
        }

        return (<ViewSchedule
            onClick={() => this._onRoom(item)}
            roomname={item.room.RoomName}
            Time={item.session.shift.duration}
            fromTime={item.session.fromHours}
            toTime={item.session.toHours}
            teacher={item.instructor.full_name}
            subject={item.schedule_subject.subject.name}
            checker={checkMan}
            status='Not Check'

            

        />)
    }
    // _onBuilding1 = (item) => {
    //     this.props.floor.fetchSelectedBuildingofData(item)
    //     this.props.navigation.navigate("Floor")
    // }

    _onSearch = () => {
        this.props.navigation.navigate("SearchStack")
    }

    render() {
        const numColumns = 50;

        const { displayName, campus } = this.props.auth.account;
        // const { building } = this.props.building;
        const { checkedData } = this.props.listschedule;
        console.log(checkedData)
        return (
            <SafeAreaView style={[style.container, style.background]}>
                <View style={style.homeheader}>
                    <Header
                        drawer={() => this.props.navigation.openDrawer()}
                        name={displayName} campus={campus.name}
                        onClick={() => this.props.navigation.navigate('SearchStack')}
                        search={this._onSearch}
                    />
                </View>



                <View style={style.main} >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={checkedData}
                        ListHeaderComponent={
                            <View>
                               

                               <HeaderTxt mainTxt="Today Schedules" />

                            </View>
                        }
                        renderItem={({ item }) => this.renderItem(item)}
                    />
                </View>

            </SafeAreaView>

        );
    }
}
