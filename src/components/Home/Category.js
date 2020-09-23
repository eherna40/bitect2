import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Fonts, Colors } from '../../infraestructure/Theme'

const Category = ({category}) => {

    return (
        <TouchableOpacity style={[styles.container]}>
            <Text style={[Fonts.univers, styles.text]}>{category.name_caterogy}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 200
    },
    text:{
        color: Colors.orange,
        fontSize: 20
    }
})

export default Category
