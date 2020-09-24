import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Flex, Fonts, Paddings, Margins } from '../../infraestructure/Theme'
import { FlatList } from 'react-native-gesture-handler'
import CVideo from '../../components/Listing/Miniature/CVideo'
import MainVideo from './MainVideo'
import { connect } from 'react-redux'
import Category from './Category'
import AskMe from '../AskMe/AskMe'

const TabView = ({ videos, selectVideo, open, closeVideo }) => {
    const [selected, setSelected] = useState([])

    useEffect(() => {
        const { childs } = videos
        setSelected(childs[0])
    }, [])

    const selectCategory = (id) => {
        setSelected(childs.find(i => i.id_category === id) || [])
    }

    const { childs } = videos

    return (
        <View style={[styles.contanier]}>
            <View style={[Flex.row, Paddings.v20, Paddings.h30, Flex.alignItemsCenter, Flex.justifyCenter]}>
                <View style={[Flex.row, { flex: 1 }, styles.tabsContainer, Paddings.v20]}>
                    {
                        childs.map(category => {
                            return <Category onSelect={() => selectCategory(category.id_category)} key={category.id_category} category={category} />
                        })
                    }
                </View>
                <AskMe />

            </View>

            <FlatList
                data={selected.products}
                keyExtractor={(item) => item.id_product}
                renderItem={({ item }) => <CVideo {...item} onPress={() => selectVideo(item)} />}
                ItemSeparatorComponent={() => <View style={[Margins.b30]} />}
                numColumns={3}
                contentContainerStyle={[Paddings.v20]}
            />
            {/* <MainVideo
              visible={open.visible}
              cover={open.cover}
              close={closeVideo}
              link={open.link}
          /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundVideo: {
        flex: 1
    },
    downloadModalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textDownloadModal: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    tabsContainer: {

        borderBottomColor: '#eee',
        borderBottomWidth: 1
    }
})
const mapStateToProps = (state) => ({
    videos: state.videosReducer.videos
})

export default connect(mapStateToProps)(TabView) 
