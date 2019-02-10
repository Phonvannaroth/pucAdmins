//import liraries
import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';

import COLORS from '../../style/color'
import style from '../../style'
import Header from '../../components/header'
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
    }
    componentDidMount() {
        const { campus, term } = this.props.auth;

        this.props.building.fetchBuilding(campus.key);
        this.props.schedule.fetchData(term.key, campus.key, hourSchedule(), currentDay())
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
        this.props.navigation.navigate("Profile")
    }
    renderItem = (item) => {
        const checkIn = item[this.state.dateKey];
        const checkMan = item[this.state.dateKey]?item[this.state.dateKey].user.displayName: null;
        
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
                status={item[this.state.dateKey].status.text }
               
            />
        }

        return (<ListSchedule
            onClick={() => this._onRoom(item)}
            roomname={item.room.RoomName}
            Time={item.session.shift.duration}
            fromTime={item.session.fromHours}
            toTime={item.session.toHours}
            teacher={item.instructor.first_name}
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
        const { building } = this.props.building;
        const { data } = this.props.schedule;
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
                                <View style={{ marginBottom: 15, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                                    {/* <Text style={style.h}>Recent Building</Text> */}
                                    <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 22, flex: 1 }}>Building</Text>
                                    <Text style={{ marginRight: 15, fontWeight: '400', fontSize: 14, color: '#2b2b2b' }}>more</Text>
                                </View>

                                <View style={{
                                    borderBottomColor: "#f7f9fa",
                                    borderBottomWidth: 10,
                                }}>
                                    <FlatList
                                        data={data}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        keyboardShouldPersistTaps="always"
                                        renderItem={({ item, index }) => <RecentCard colorsindex={index}
                                            onClick={() => this._onBuilding1(item)}
                                            text={item.room.BuildingName} />}
                                    />
                                    <View style={{
                                        marginTop: 15, borderBottomColor: "#f7f9fa",
                                        borderBottomWidth: 10,
                                    }}>

                                        <Text style={{ marginBottom: 15, marginLeft: 15, fontWeight: '700', fontSize: 22 }}>Schedule</Text>

                                    </View>
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
