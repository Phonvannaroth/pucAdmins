//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';

import COLORS from '../../style/color'
import style from '../../style'
import Header from '../../components/header'
import RecentCard from '../../components/recent_card'
import List from '../../components/list'
import { recentCard } from '../../dummy/reactCard'
import { listBuilding } from '../../dummy/listBuilding'
import ListBuilding from '../../components/list'


import { inject, observer } from 'mobx-react';

@inject("auth")
@observer
export default class HomeScreen extends Component {

    componentDidMount(){
        this.props.auth.fetchBuilding();
    }

    _onLogOut=()=>{
        this.props.auth.logOut();
    }

    _onBuilding=()=>{
        this.props.navigation.navigate("Floor")
    }

    render() {
        const numColumns=2;
        const {displayName,campus}=this.props.auth.account;
        const {building}=this.props.auth;
        return (

            <SafeAreaView style={[style.container, style.background]}>
            <View style={{height:80}}>
                 <Header logOut={this._onLogOut} name={displayName} campus={campus.name} onClick={() => this.props.navigation.navigate('SearchStack')}/>
                 </View>
                <ScrollView showsVerticalScrollIndicator={false}  >
                   
                    <View style={style.main} >

                        {/* <Header name="Steve.Job" campus="South Campus" /> */}

                        <View style={{ marginBottom: 15 }}>
                            <Text style={style.h}>Recent Building</Text>
                        </View>
                        <View style={{ flex: 1, }} >

                            <FlatList
                                data={recentCard}
                                renderItem={({ item }) => <RecentCard onClick={this._onBuilding} data={item} />}
                                numColumns={numColumns}
                            />
                        </View>


                        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                            <View style={{ flex: 1, marginBottom: 10 }} >

                            </View>


                        </View>
                        
                        {
                            building.map(m => {
                                return (<ListBuilding key={m.key} name={m.name} />)
                            })
                        }


                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}
