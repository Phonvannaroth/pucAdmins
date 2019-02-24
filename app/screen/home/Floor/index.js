import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Matfloor from './../../../components/Matfloor'
import { roomData } from './../../../dummy/roomData'
import { floorData } from './../../../dummy/floorData'
import { inject, observer } from 'mobx-react';
import { listLecture } from '../../../dummy/listBuilding'
import ListFloor from '../../../components/listFloor';
import HeaderTxt from '../../../components/headerTxt'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'react-native-gesture-handler';
import { toDateKey,toCalendar, currentDay, hourSchedule } from '../../../services/mapping';
@inject("auth", "building", "room", 'floor', "profile")
@observer

export default class FloorSc extends Component {
    constructor() {
        super()
        this.state={
            dateKey:toDateKey(new Date())
        }
    }
    componentDidMount() {
        const { term } = this.props.auth;
        this.props.floor.fetchData(term.key, currentDay(),hourSchedule());
    }
    
    _onRoom = (item) => {
        this.props.profile.fetchSelectedRoom(item)
        this.props.navigation.navigate("Profile")
    }

    _onSelectedFloor = (item) => {
        this.props.floor.fetchRoomByFloor(item.key);
    }

    _renderHeader = () => {
        const { floor } = this.props.floor;
        return (
            <View>
                 <HeaderTxt mainTxt="Floor" subTxt="More" />
          
            <ScrollView horizontal="true" showsHorizontalScrollIndicator="false">
                <View style={styles.recent}>
                    {
                        floor.map(m => {
                            const { name, key } = m
                            return (<ListFloor key={key} name={name} onClick={() => this._onSelectedFloor(m)} />)
                        })
                    }
                </View>
            </ScrollView>
            <HeaderTxt mainTxt="Daily Schedule" />
            </View>
        )
    }
    
    _renderItem = (item) => {
        const checkIn = item[this.state.dateKey];
        const checkMan = item[this.state.dateKey] ? item[this.state.dateKey].user.displayName : null;
        const {instructor}=item;
        const instructorName=instructor?instructor.full_name:'Unknown';
        if (checkIn) {
            const { checkDate } = checkIn;
            const dateMemo = toCalendar(checkDate);
            return <ListSchedule
                checkIn={dateMemo}
                roomname={item.room.RoomName}
                Time={item.session.fromHours}
                fromTime={item.session.fromHours}
                toTime={item.session.toHours}
                teacher={instructorName}
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
            teacher={instructorName}
            subject={item.schedule_subject.subject.name}
            checker={checkMan}
        />)
    }


    render() {
        const { data } = this.props.floor;
        return (
            <FlatList
            
                data={data}
                showsHorizontalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
                renderItem={({ item }) => this._renderItem(item)}
                ListHeaderComponent={this._renderHeader()}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    search: {
        backgroundColor: '#fff',
        borderWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingTop: 12,
    },
    searchbox: {
        backgroundColor: '#f1f0f0',
        height: 40,
        borderRadius: 20,
        padding: 15
    },
    searchicon: {
        fontSize: 24,
    },
    body: {
        margin: 10
    },
    recent: {
        flexDirection: 'row',
    }
});