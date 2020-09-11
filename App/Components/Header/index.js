import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { LocalImage } from '@Media'

const Header = () => {
    return (
        <Image
            source={LocalImage.LogoApp}
            style={styles.image_header}
            resizeMode={'contain'}
        />
    )
}
const styles = StyleSheet.create({
    image_header: {
        height: 70,
        width: 150,
    }
})
export default Header