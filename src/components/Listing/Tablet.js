import React from 'react'
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'
import H3 from '../paragraph/H3'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { Colors, Flex, Paddings, Margins } from '../../infraestructure/Theme';
import P from '../paragraph/P';
import Span from '../paragraph/Span';

const Tablet = ({ data, onPress }) => {

    const Item = ({ code, campaing, id }) => {
        return <TouchableOpacity 
        onPress={() => onPress(id)}
        style={[styles.item, Flex.row, Flex.alignItemsCenter, Flex.justifySpaceBetween, Paddings.h10, Paddings.v10, Margins.r10]}>
            <View>
                <Span text={code} fonts={true} />
                <Span text={campaing} fonts={true} />
            </View>
            <Icon name='tablet1' size={40} color='black' />
        </TouchableOpacity>
    }

    return (
        <FlatList
        
            data={data}
            keyExtractor={(item) => item.code}
            contentContainerStyle={{ justifyContent: 'space-between' }}
            numColumns={4}
            initialNumToRender={2}
            renderItem={({ item }) => {
                return <Item {...item} />
            }}
        />
    )
}
const styles = StyleSheet.create({
    item: {
        height: 100,
        backgroundColor: Colors.lightBlue,
        width: '20%'
    }
})

export default Tablet
