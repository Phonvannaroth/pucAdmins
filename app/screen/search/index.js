//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import { floorData } from '../../dummy/floorData'
import LectureCard from '../../components/lecturer_card'
import ListDrawer from '../../components/listDrawer'
import ListLecture from '../../components/lecturer'
import ListSearch from '../../components/listsearch'
import { listLecture } from '../../dummy/listBuilding'

import { inject, observer } from 'mobx-react';

// create a component
@inject("auth")
@observer


class SearchScreen extends Component {

    constructor() {
        super()
    }

    _onBack = () => { this.props.navigation.goBack(); }
    render() {

        return (

            <SafeAreaView>
                <SearchBar
                    round
                    searchIcon={
                        <TouchableOpacity onPress={this._onBack}>
                            <Icon name="ios-arrow-back"
                                style={styles.searchicon} />
                        </TouchableOpacity>
                    }
                    containerStyle={styles.search}
                    inputContainerStyle={styles.searchbox}
                    placeholder='Search'
                    autoFocus={true}
                />
                <View style={styles.body}>

                    {/* <Text>Recent</Text>
                    <ScrollView horizontal="true" showsHorizontalScrollIndicator="false">
                        <View style={styles.recent}>


                            {
                                listLecture.map(m => {
                                    return (<ListLecture data={m} />)
                                })
                            }



                        </View>

                    </ScrollView>
                    <ScrollView  showsHorizontalScrollIndicator="false">
                        <View >


                            {
                                listLecture.map(m => {
                                    return (<ListSearch data={m} />)
                                })
                            }



                        </View>

                    </ScrollView> */}
                    <View style={{ width: 375, height: 350, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                        <ImageBackground source={require('../../img/develop.png')} style={{ height: 150, width: 150 }}>

                        </ImageBackground>

                        <Text style={{ fontSize: 20, fontWeight: '600', color: '#333', marginTop: 10 }}>Developing</Text>


                    </View>

                </View>

            </SafeAreaView>


        );
    }
}

// define your styles
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

//make this component available to the app
export default SearchScreen;
