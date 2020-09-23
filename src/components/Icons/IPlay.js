import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign';

const IPlay = ({ color, size }) => <View style={{backgroundColor: 'white', borderRadius: 100}}>
    <Icon name='play' color={color} size={size} />
    </View>

export default IPlay
