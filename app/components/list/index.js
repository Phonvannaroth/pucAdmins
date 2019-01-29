import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import colorsIndex from '../color'
export default (ListBuilding = ({name,index}) => (
  <TouchableOpacity>
    <View style={styles.list}>
      <View style={[styles.profile,{backgroundColor:colorsIndex[index].color}]}>
          <Text style={styles.avatarText}>{name.trim().substring(0,2).toUpperCase()}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>{name}</Text>
        <Icon style={styles.icon} name="chevron-right" />
      </View>
    </View>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  list: {
    height: 64,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: "center"
  },
  icon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3333"
  },
  item: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 22,
    borderBottomColor: "#333"
  },
  text: {
    fontSize: 16
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems:'center'
  },
  avatarText:{
      fontWeight:'700',
      color:'#fff',
      fontSize: 17
  }
});
