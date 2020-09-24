import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Fonts } from '../../infraestructure/Theme';

export default function AskMe() {
    return (
        <TouchableOpacity style={[styles.container]}>
            <Icon name='comments-o' color={'black'} size={25} style={{ marginRight: 5 }} />
            <Text style={[Fonts.univers, styles.text]}>¡PREGUNTANOS!</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({


    label: {
        color: '#e85900',
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e85900',
        width: 200,
        height: 50,
        padding: 12,
        // position: 'absolute',
        borderRadius: 50,
        // top: 20,
        // right: 10,
        // zIndex: 11,
        elevation: 3
    }
})