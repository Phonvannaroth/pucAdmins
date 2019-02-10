//import liraries
import React, { Component } from 'react';
import Verify from '../../elements/verify'
import Modal from "react-native-modal";
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// create a component
export default  class VerifyModal extends Component {
    render() {
       const {close,onClick} = this.props
        return (
            <View style={{ alignItems: 'center' }}>
            <View style={{ height: 370, width: 375, backgroundColor: '#fff', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, margin: 15 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: '800', fontSize: 24, flex: 1 }}>Check In</Text>
                    </View>
                    <View  >
                        <TouchableOpacity onPress={close}>
                            <Icon size={32} name='ios-close' color='#333' />
                        </TouchableOpacity >
                    </View>

                </View>

                <Verify onClick={()=>onClick({key:'presented',text:'Presented'})} Ionicons='ios-ribbon' Txt='Presented' Color='gray' Click={()=>alert("hello")} />
                <Verify onClick={()=>onClick({key:'late',text:'Late'})} Ionicons='ios-time' Txt='Late' Color='#2b2b2b' />
                <Verify onClick={()=>onClick({key:'too-late',text:'Too Late'})} Ionicons='ios-speedometer' Txt='Too late' Color='purple' />
                <Verify onClick={()=>onClick({key:'permission',text:'Permission'})} Ionicons='ios-hand' Txt='Permission' Color='orange' />
                <Verify onClick={()=>onClick({key:'absent',text:'Absent'})} Ionicons='ios-sad' Txt='Absent' Color='red' />

                {/* <TouchableOpacity  onPress={this._toggleModal} >
                    <View style={styles.btnSubmit} backgroundColor='#CC61C8' >
                        <View style={{ margin: 15 }}>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>Cancle</Text>

                        </View>
                    </View>
                </TouchableOpacity> */}
            </View>

        </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 5
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
    btnSubmit: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        borderRadius: 10,

    }
});