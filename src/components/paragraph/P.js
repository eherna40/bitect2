import React from 'react'
import { View, Text } from 'react-native'
import { Margins, Fonts } from '../../infraestructure/Theme'

const P = ({ text, onPress, color, fonts, fontSize }) => <Text style={[{color, fontSize}, fonts && Fonts.univers , Margins.b20]} onPress={onPress}>{text}</Text>

export default P
