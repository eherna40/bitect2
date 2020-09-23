import React from 'react'
import { View, Text } from 'react-native'
import { Margins, Fonts } from '../../infraestructure/Theme'

const Span = ({ text, onPress, color, fonts, fontSize }) => <Text style={[{color, fontSize}, fonts && Fonts.univers]} onPress={onPress}>{text}</Text>

export default Span
