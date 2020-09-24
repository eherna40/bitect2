import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import { Paddings, Colors, Margins, Flex, Fonts } from '../../../infraestructure/Theme'
import H5 from '../../paragraph/H5'
import P from '../../paragraph/P'
import IPlay from '../../Icons/IPlay'

const CVideo = ({
    name,
    description_short,
    onPress,
    cover,
}) => {

    return (
        <TouchableOpacity style={[styles.container, Paddings.h20]} onPress={onPress}>
            <View style={[styles.containerImage]}>
                <ImageBackground style={[styles.content, Flex.alignItemsCenter, Flex.justifyCenter]} source={{
                    uri: cover, height: 150, flex: 1, width: 150
                }} resizeMode='cover'>
                    <View style={{ backgroundColor: 'transparent', height: 40, width: 40, }} >
                        <IPlay size={40} color={Colors.orange} />
                    </View>
                </ImageBackground>

            </View>

            <View style={[styles.description, Margins.t10]}>
                <H5 text={name} color={Colors.orange} />
                <P text={description_short} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 3,

    },
    content: {
        flex: 1,
        height: 150,
        elevation: 1,

    },
    containerImage: {
        height: 150,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden'
    },
    play: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 999,
        height: '100%',
        width: '100%'
    },
    text: {
        color: Colors.orange,
        marginTop: -12,
        fontSize: 13
    }

})

export default CVideo
