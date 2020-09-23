import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Colors, Paddings, Flex } from '../../infraestructure/Theme'
import { HEADER_HEIGHT } from '../../infraestructure/constants'

const Header = ({ }) => {
    return (
        <View style={[styles.container, Paddings.h30]}>
            <View style={[styles.imageContainer, Flex.alignItemsCenter, Flex.justifyCenter]}>
                <Image source={require('../../assets/img/worx.white.png')} resizeMode='contain' style={{ width: 130, height: 60}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: HEADER_HEIGHT,
        width: '100%',
        backgroundColor: Colors.orange
    },
    imageContainer:{
        backgroundColor: 'black',
        width: 180
    }
})

export default Header
