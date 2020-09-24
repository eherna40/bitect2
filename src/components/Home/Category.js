import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Fonts, Colors, Margins, Paddings } from '../../infraestructure/Theme';

const Category = ({ category, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect} style={[styles.container, Margins.r20, Paddings.r20]}>
            <Text style={[Fonts.univers, styles.text]}>{category.name} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {},
    text: {
        color: Colors.orange,
        fontSize: 20,
        textTransform: 'uppercase',
    },
});

export default Category;
