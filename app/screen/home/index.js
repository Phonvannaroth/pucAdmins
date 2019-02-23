//import liraries
import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';

import COLORS from '../../style/color'
import style from '../../style'
import Header from '../../components/header'
import HeaderTxt from '../../components/headerTxt'
import RecentCard from '../../components/recent_card'
import List from '../../components/list'
import { recentCard } from '../../dummy/reactCard'
import { listBuilding } from '../../dummy/listBuilding'
import ListSchedule from '../../components/listSchedule'
import Clock from '../../components/clock'
import moment from 'moment'

import { inject, observer } from 'mobx-react';
import { currentHourToNumber, hourSchedule, currentDay, toHourSchedule, toDateKey, toCalendar } from '../../services/mapping';

@inject("auth", "building", "schedule", "room", "floor", "profile")
@observer
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTime: new Date(),
            dateKey: toDateKey(new Date())
        }
        setInterval(() => {
            this.setState({
                curTime: new Date()
            })
        }, 1000)
    }
    componentDidMount() {
        const { campus, term } = this.props.auth;
        this.props.building.fetchBuilding(campus.key);
        this.props.schedule.fetchData(term.key, campus.key, hourSchedule(), currentDay())
        
    }

  
    _onRoom = (item) => {
        this.props.profile.fetchSelectedRoom(item)
        this.props.navigation.navigate("Profile")
    }
    renderItem = (item) => {
        
        const checkIn = item[this.state.dateKey];
        const checkMan = item[this.state.dateKey] ? item[this.state.dateKey].user.displayName : null;

        if (checkIn) {
            const { checkDate } = checkIn;
            const dateMemo = toCalendar(checkDate);
            return <ListSchedule
            
                checkIn={dateMemo}
                roomname={item.room.RoomName}
                Time={item.session.fromHours}
                fromTime={item.session.fromHours}
                toTime={item.session.toHours}
                teacher={item.instructor.full_name}
                subject={item.schedule_subject.subject.name}
                checker={checkMan}
                status={item[this.state.dateKey].status.text}

            />
        }

        return (<ListSchedule
            onClick={() => this._onRoom(item)}
            roomname={item.room.RoomName}
            Time={item.session.shift.duration}
            fromTime={item.session.fromHours}
            toTime={item.session.toHours}
            teacher={item.instructor.full_name}
            subject={item.schedule_subject.subject.name}
            checker={checkMan}



        />)
    }

    _onBuilding1 = (item) => {
        this.props.floor.fetchSelectedBuildingofData(item)
        this.props.navigation.navigate("Floor")
    }

    _onSearch = () => {
        this.props.navigation.navigate("SearchStack")
    }

    render() {
        const numColumns = 50;
        const { displayName, campus } = this.props.auth.account;
        const { data, building } = this.props.schedule;
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
                        data={data}
                        ListHeaderComponent={
                            <View>
                                <Clock
                                    day={moment(this.state.curTime).format('dddd')}
                                    time={moment(this.state.curTime).format('hh:mm')}
                                    date={moment(this.state.curTime).format('LL')}
                                    color={moment(this.state.curTime).format('dddd')}
                                    color='Monday'

                                />

                                <HeaderTxt mainTxt="Building" subTxt="More" />

                                <View style={{  backgroundColor:'#fff',}}>
                                    <FlatList
                                        data={building}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        keyboardShouldPersistTaps="always"
                                        renderItem={({ item, index }) => <RecentCard colorsindex={index}
                                            onClick={() => this._onBuilding1(item)}
                                            text={item.room.BuildingName} />}
                                    />

                                    <HeaderTxt mainTxt="Daily Schedules" />
                                </View>

                            </View>
                        }
                        renderItem={({ item }) => this.renderItem(item)}
                    />
                </View>

            </SafeAreaView>

        );
    }
}
