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
    main: {
        marginHorizontal: 10,


    },
    header: {
        marginTop: 50
    }
})