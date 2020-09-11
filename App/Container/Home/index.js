/*
@tnh
RN0.63
*/

import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { specialNavigate } from '../../Navigation/NavigationActions'

const HomeScreen = (props) => {
    const handleNavigate = () => {
        specialNavigate(props.componentId, 'DetailItem')

    }
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                onPress={() => handleNavigate()}
                title="PUSH"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default HomeScreen