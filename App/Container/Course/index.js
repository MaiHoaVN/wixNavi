/*
@tnh
RN0.63
*/

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CourseScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Course Screen</Text>
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
export default CourseScreen