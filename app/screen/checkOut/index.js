import React, { Component } from "react";
import { Text, View } from "react-native";
import { CheckBox, Button } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      
      
    };
    this.state={
      bitch:[]
    };
  }
  render() {
    return (
      <View>
        <View
          style={{
            height: "50%",
            alignItems: "center",
            backgroundColor: "#172C4B"
          }}
        >
          <Text style={{ color: "#C5A66E", fontSize: 50, marginTop: 100 }}>
            Check Out
          </Text>
          <Text style={{ color: "#fff", fontSize: 5 }}>
            oooooooooooooooooooooooooooooo
          </Text>
          <Text style={{ color: "#fff", fontSize: 18, marginTop: 12,}}>
            Subject: Introduction to God
          </Text>
          <Text style={{ color: "#fff", fontSize:  14, marginTop: 12,}}>
            Professor: Phon Vannroth
          </Text>
        </View>
        <View>
          <CheckBox
            title="Less that 15 MN"
            checked={this.state.checked}
            uncheckedIcon="circle-o"
            checkedIcon="dot-circle-o"
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
            <CheckBox
            title="Less that 15 MN"
            checked={this.state.bitch}
            uncheckedIcon="circle-o"
            checkedIcon="dot-circle-o"
            onPress={() => this.setState({ bitch: !this.state.bitch })}
          />
        </View>
        <TextInput
          style={{ backgroundColor: "#f8f9fa", padding: 12, height: 150 }}
          placeholder="Type any note here!!"
        />
        <View style={{alignItems:"center"}}>
        <Button
          title="Summit"
          loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
        </View>
      </View>
    );
  }
}
