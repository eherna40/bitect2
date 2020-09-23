import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Fonts } from '../../infraestructure/Theme'

const H1 = ({ text, onPress, color }) => <Text onPress={onPress} style={[styles.text, Fonts.univers, {color: color || 'black'}]}>{text}</Text>

const styles = StyleSheet.create({
    text:{
        fontSize: 60,
    }
})
export default H1
