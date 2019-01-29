import React, { Component } from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import { floorData } from "./../../../dummy/roomData";
import { inject, observer } from "mobx-react";
import { FlatList } from "react-native-gesture-handler";
import MatRoom from "../../../components/MatRoom";

@inject("classroom")
@observer
export default class RoomScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.classroom.fetchclassroom();
  }

  _onSelectedRoom(){

  }

  _renderItem=(item)=>{
    const {building,name,floor}=item;
    // const data={building,name,floor};
    return(
      <MatRoom 
      roomName={name}
      floorName={floor.name}
      buildingName ={building.name}
        onSelected={()=>this._onSelectedRoom(item)}
      />
    )
  }
  render() {
    const { classroom } = this.props.classroom;
    console.log(classroom)
    return (
      <ScrollView>
        <FlatList
          key={(item,index)=>index.toString()}
          data={classroom}
          renderItem={({ item }) =>this._renderItem(item)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
