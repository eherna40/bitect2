import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Flex, Fonts, Paddings, Margins } from '../../infraestructure/Theme'
import { FlatList } from 'react-native-gesture-handler'
import CVideo from '../../components/Listing/Miniature/CVideo'
import MainVideo from './MainVideo'

const TabView = ({ videos, selectVideo, open, closeVideo }) => {
    return (
      <View style={[styles.contanier]}>
          {/*<View style={[Flex.row, Paddings.v20, Paddings.h30]}>
              {
                  parent.map(category => {
                      return <Category key={category.id_category} category={category} />
                  })
              }
            </View>*/}
          <FlatList
              data={videos}
              keyExtractor={(item) => item.id_product}
              renderItem={({ item }) => <CVideo {...item} onPress={() => selectVideo(item)} />}
              ItemSeparatorComponent={() => <View style={[Margins.b30]} />}
              numColumns={3}
              contentContainerStyle={[Paddings.v20]}
          />
          <MainVideo
              visible={open.visible}
              cover={open.cover}
              close={closeVideo}
              link={open.link}
          />
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
  }
})

export default TabView
