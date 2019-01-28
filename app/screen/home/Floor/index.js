import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Matfloor from './../../../components/Matfloor'
import { roomData } from './../../../dummy/roomData'
import { floorData } from './../../../dummy/floorData'
import { inject, observer } from 'mobx-react';
import { listLecture } from '../../../dummy/listBuilding'
import ListFloor from '../../../components/listFloor';
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'react-native-gesture-handler';
@inject("auth", "building")
@observer

export default class FloorSc extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.building.fetchClassRoom();
    }
    _onRoom = () => {
        this.props.navigation.navigate("Profile")
    }
    _onSelectedFloor=(item)=>{
        this.props.building.fetchRoomByFloor(item.floor);
    }

    render() {
        const { classroom,floors } = this.props.building;
        return (
            <View style={{ backgroundColor: '#f7f9f9', flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 15, fontWeight: '800', fontSize: 24, marginTop: 10, flex: 1 }}>Floors</Text>
                    <Text style={{ marginRight: 15, fontWeight: '400', fontSize: 16, marginTop: 10, alignItems: 'center' }}>more
       </Text>


                </View>
                <View style={{ marginBottom: 10, marginTop: 10, }}>
                    <ScrollView horizontal="true" showsHorizontalScrollIndicator="false">
                        <View style={styles.recent}>


                            {
                                      floors.map(m => {
                                    return (<ListFloor key={m.key} name={m.floor.name} onClick={()=>this._onSelectedFloor(m)}/>)
                                })
                            }

                        </View>

                    </ScrollView>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#D3D3D3', height: 5, marginHorizontal: 15, marginBottom: 10 }}>

                </View>

                {/* <ScrollView >
    
       <Text style={{marginLeft:15, fontWeight:'800', fontSize:24}}>Class List</Text>
      
      
       {
         roomData.map(m=>{
           return (<Matfloor onClick={this._onRoom}  data={m} />)
         })
       }
     
    
     </ScrollView> */}
                <FlatList
                    data={classroom}
                    renderItem={({ item }) => (<Matfloor name={item.RoomName} />)}
                />
                <View style={{ flex: 1 }}>

                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

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