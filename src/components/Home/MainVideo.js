import React, { useState, useRef } from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import HVideo from './HVideo'
import HeaderModal from '../Header/HeaderModal'
import { Flex } from '../../infraestructure/Theme';

const MainVideo = ({ visible, link, cover, close, repeat }) => {
  return (
    <View style={[styles.container, Flex.alignItemsCenter, Flex.justifyCenter]}>
      <Modal
        visible={visible}
        animationType='fade'
      >
        <HeaderModal noButton={false} close={() => close()} />
        <HVideo repeat={repeat} source={link} cover={cover} close={() => close()} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: 'white',
  }
})

export default MainVideo
