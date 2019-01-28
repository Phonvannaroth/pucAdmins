import React from 'react';
import { StyleSheet } from 'react-native'
import { COLORS } from './color'
import { FONTS } from './font'
export default StyleSheet.create({

    // ====== <Color> ========
    primary: {
        color: COLORS.primary
    },
    secondary: {
        color: COLORS.secondary
    },

    background: {
        backgroundColor: COLORS.background
    },

    // ======== <Font> ===========
    h: {
        fontWeight: FONTS.h,
        color: '#2b2b2b',
        marginLeft:5,
        fontSize: 18,
        fontWeight: '800',
        fontFamily: 'Helvetica Neue'
    },
    p: {
        fontWeight: FONTS.p
    },
    s: {
        fontWeight: FONTS.s
    },
    // ======== <alignment> ===========
    row: {
        flexDirection: 'row'
    },
    flex: {
        flex: 1
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
    },
    homeheader:{
        height: 60 , 
        borderBottomWidth:0.5, 
        borderBottomColor:'#d5d5d5'
    },
    main: {
        marginHorizontal: 10,


    },
    mainbg: {
        backgroundColor: COLORS.mainbg
    },
    header: {
        marginTop: 50
    },
    /////
    containered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem:{
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    }
})