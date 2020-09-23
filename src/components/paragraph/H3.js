import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Fonts } from '../../infraestructure/Theme'

const H3 = ({ text, onPress, color }) => <Text onPress={onPress} style={[styles.text, Fonts.univers, {color: color || 'black'}]}>{text}</Text>

const styles = StyleSheet.create({
    text:{
        fontSize: 40,
    }
})
export default H3
