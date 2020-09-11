/*
@tnh
RN0.63
*/

import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, Platform, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { NavigationAction, ApplicationNavigation } from '@Navigation'
import { LocalImage } from '@Media'
import { Card, Icon } from 'native-base'
import { ColorApp } from '@Helper'
import { TouchableScale } from '@Components'

const LoginScreen = (props) => {
    let dataLogin = {}



    const headerScreen = () => {
        return (
            <Image
                source={LocalImage.LogoApp}
                style={styles.image}
                resizeMode={'contain'}
            />
        )
    }
    const handleChangeText = (type, data) => {
        dataLogin[type] = data
    }

    const fieldLogin = (type, icon, placeholder) => {
        return (
            <Card style={styles.card_input}>
                <Icon
                    type={'AntDesign'}
                    name={icon}
                    style={styles.icon_input}
                />
                <TextInput
                    onChangeText={text => handleChangeText(type, text)}
                    placeholder={placeholder}
                    style={styles.input_field}
                />
            </Card>
        )
    }

    const formLogin = () => {
        return (
            <View style={styles.view_formLogin}>
                {fieldLogin('phone', 'user', 'Số điện thoại')}
                {fieldLogin('password', 'lock', 'Mật khẩu')}
            </View>
        )
    }

    const handleNavigate = (routeName) => {
        if (routeName === 'Register') {
            NavigationAction.specialNavigate(props.componentId, routeName)
        }
        else {
            NavigationAction.setRoot(ApplicationNavigation)
        }

    }


    const handleAction = (type) => {
        if (type === 'login') {
            handleNavigate('Login')
        }
        else if (type === 'signup') {
            handleNavigate('Register')
        }
    }

    const itemButon = (label, type, color, border) => {
        return (
            <TouchableScale
                onPress={() => handleAction(type)}
                style={[styles.touchable_submitLogin, { backgroundColor: color, borderColor: border ? border : color, borderWidth: 1 }]}
            >
                <Text style={[styles.text_submitLogin, { color: border ? border : ColorApp.WHITE }]}>{label}</Text>
            </TouchableScale>
        )
    }
    const submitLogin = () => {
        return (
            <View style={styles.view_submitLogin}>
                {itemButon('ĐĂNG NHẬP', 'login', ColorApp.PRIMARY)}
                {/* {itemButon('FB LOGIN', 'fblogin', '#3b5998')} */}
                <View style={styles.view_otherway}>
                    <View style={styles.view_otherline} />
                    <Text>{`HOẶC`}</Text>
                    <View style={styles.view_otherline} />
                </View>
                {itemButon('ĐĂNG KÝ TÀI KHOẢN MỚI', 'signup', ColorApp.WHITE, ColorApp.PRIMARY)}
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view_container}>
                {headerScreen()}
                {formLogin()}
                {submitLogin()}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_container: {
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        alignItems: 'center'

    },
    image: {
        width: 250,
        height: 100
    },
    input_field: {
        height: 45,
        width: '90%',
        paddingLeft: 10

    },
    view_formLogin: {
        width: '100%',
        marginTop: 50
    },
    card_input: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 40,
        marginBottom: 15
    },
    icon_input: {
        color: ColorApp.INACTIVE,
        fontSize: 24
    },
    view_submitLogin: {
        width: '100%',
        marginTop: 40
    },
    touchable_submitLogin: {
        backgroundColor: ColorApp.PRIMARY,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    text_submitLogin: {
        color: ColorApp.WHITE,
        fontWeight: 'bold'
    },
    view_otherway: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: 'row'
    },
    view_otherline: {
        height: 1,
        backgroundColor: ColorApp.BLACK,
        width: '40%'
    }
})
export default LoginScreen