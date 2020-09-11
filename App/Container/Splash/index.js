/*
@tnh
RN0.63
*/

import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { ApplicationNavigation, AuthenticationNavigation } from '@Navigation'
import { Navigation } from 'react-native-navigation'
import { useSelector } from 'react-redux'
import Splash from 'react-native-splash-screen'

const SplashScreen = () => {
    // const stateStore = useSelector(state => state)
    // console.log(stateStore)
    const isAutologin = false
    if (isAutologin) {
        Navigation.setRoot({
            root: ApplicationNavigation
        })
    }
    else {
        Navigation.setRoot({
            root: AuthenticationNavigation
        })
    }
    Splash.hide()
    return null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default SplashScreen