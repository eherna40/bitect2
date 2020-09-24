import React from 'react'
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'
import H3 from '../paragraph/H3'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { Colors, Flex, Paddings, Margins } from '../../infraestructure/Theme';
import P from '../paragraph/P';
import Span from '../paragraph/Span';


const Item = ({ code, campaing, id, onPress }) => {
    return <TouchableOpacity
        onPress={onPress}
        style={[styles.item, Flex.row, Flex.alignItemsCenter, Flex.justifySpaceBetween, Paddings.h10, Paddings.v10, Margins.r10, Margins.v10]}>
        <View>
            <Span text={code} fonts={true} />
            <Span text={campaing} fonts={true} />
        </View>
        <Icon name='tablet1' size={40} color='black' />
    </TouchableOpacity>
}


const Tablet = ({ data, onPress }) => {


    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.code}
            contentContainerStyle={{ justifyContent: 'space-between' }}
            numColumns={4}
            initialNumToRender={2}
            renderItem={({ item }) => {
                return <Item {...item} onPress={() => onPress(item)} />
            }}
        />
    )
}
const styles = StyleSheet.create({
    item: {
        height: 100,
        backgroundColor: Colors.lightBlue,
        width: '20%',
        borderRadius: 6,
        elevation: 4,

    }
})

export default Tablet
