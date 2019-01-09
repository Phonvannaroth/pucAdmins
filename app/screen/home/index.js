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

const numColumns = 2;
// create a component
class HomeScreen extends Component {


    constructor(props) {
        super(props)
    };
    render() {
        return (

            <SafeAreaView style={[style.container, style.background]}>
            <View style={{height:80}}>
                 <Header name="Administrator" campus="South Campus" onClick={() => this.props.navigation.navigate('SearchStack')}/>
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
                                renderItem={({ item }) => <RecentCard data={item} />}
                                numColumns={numColumns}
                            />
                        </View>


                        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                            <View style={{ flex: 1, marginBottom: 10 }} >

                            </View>


                        </View>
                        {
                            listBuilding.map(m => {
                                return (<ListBuilding data={m} />)
                            })
                        }


                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

//make this component available to the app
export default HomeScreen;
