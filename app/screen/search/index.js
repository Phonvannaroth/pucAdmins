//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements'

   

// create a component
class SearchScreen extends Component {
    render() {
        return (

<SafeAreaView>
<SearchBar
containerStyle={{backgroundColor: 'transparent'}}
  showLoading
  platform="ios"
  cancelButtonTitle="Cancel"
  placeholder='Search' />

</SafeAreaView>


        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});

//make this component available to the app
export default SearchScreen;
