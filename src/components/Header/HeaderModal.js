import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, Paddings, Flex, Margins } from '../../infraestructure/Theme'
import { HEADER_HEIGHT } from '../../infraestructure/constants'
import IClose from '../Icons/IClose'

const HeaderModal = ({ close, noButton }) => {
    return (
        <View style={[styles.container, Paddings.h30, Flex.justifySpaceBetween, Flex.row]}>
            <View style={[styles.imageContainer, Flex.alignItemsCenter, Flex.justifyCenter]}>
                <Image source={require('../../assets/img/worx.white.png')} resizeMode='contain' style={{ width: 130, height: 60 }} />
            </View>
            {!noButton ? 
                    <TouchableOpacity style={[styles.btn, Flex.alignItemsCenter, Flex.justifyCenter, Margins.t10]} onPress={close}>
                        <IClose size={30} color='white' />
                    </TouchableOpacity>
                :
                    null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: HEADER_HEIGHT,
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 9999
    },
    imageContainer: {
        backgroundColor: 'black',
        width: 180
    },
    btn: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: Colors.orange
    }
})

export default HeaderModal
