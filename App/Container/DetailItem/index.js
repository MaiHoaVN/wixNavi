/*
@tnh
RN0.63
*/

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DetailItemScreen = () => {
    return (
        <View style={styles.container}>
            <Text>DetailItem Screen</Text>
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
export default DetailItemScreen