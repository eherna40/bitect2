import React, { useState } from 'react'
import { View, TouchableOpacity, FlatList, Dimensions, StyleSheet, Modal } from 'react-native'
// import Video from './Miniature/CVideo'
import Span from '../paragraph/Span'
import { Paddings, Colors, Margins, Flex } from '../../infraestructure/Theme'

const { width } = Dimensions.get('window');
const itemWidth = (width) / 4;

const Videos = ({ data, selectVideo }) => {
    console.log(data)
    return (
        <View >
            {/* <FlatList
                numColumns={3}
                data={data}
                scrollEnabled={true}
                ItemSeparatorComponent={() => <View style={[Paddings.r10, Margins.v30]} />}
                contentContainerStyle={[Paddings.h30]}
                keyExtractor={(item) => item.id_product}
                renderItem={({ item, index }) => <Video {...item} index={index} onPress={selectVideo} />}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 8,
        borderBottomColor: Colors.orange
    }
})

export default Videos
