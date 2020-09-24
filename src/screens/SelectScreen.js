import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import H3 from '../components/paragraph/H3'
import P from '../components/paragraph/P'
import { actionGetTablets, actionOnSelectTablet } from '../infraestructure/redux/actions/tablets'
import { Colors, Flex, Margins, Paddings } from '../infraestructure/Theme'
// import { getTablets,selectTablet } from '../infraestructure/api/API'
import Tablet from '../components/Listing/Tablet';
// import { StorageService, DownloadService } from '@common';

// const STORAGE_VIDEOS = '@storage_videos';
// const STORAGE_TABLE = '@storage_table';
// const STORAGE_CAMPAIGN = '@storage_campaign';

const SelectScreen = ({ getTablets, error, loading, tablets, selectTablet }) => {

  useEffect(() => {
    getTablets()
  }, [])

  const onSelect = async (id) => {
    selectTablet(id)
    // const {status, data} = await selectTablet(id)
    // if(status == 'success') {
    // await StorageService.storeData(STORAGE_TABLE, id);
    // await StorageService.storeData(STORAGE_CAMPAIGN, data.id);
    // await StorageService.removedStoredData(STORAGE_VIDEOS);
    // await DownloadService.downloadFiles(data, id);
    // navigation.navigate('Home', { reload: true })
    // }
  }

  if (loading) {
    return <View style={[styles.container, Flex.alignItemsCenter, Flex.justifyCenter]}>
      <ActivityIndicator color={Colors.orange} />
    </View>
  }

  return (
    <View style={[styles.container, Paddings.h30, Margins.t20]}>
      <H3 text='SELECCIONA DISPOSITIVO' />
      <P text='Selecciona el codigo de tablet para asignarle la campaña. Cada tablet va asociada a una campaña y a un centro' />
      <Tablet
        onPress={onSelect}
        data={tablets}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = (state) => ({
  error: state.tabletReducer.error,
  loading: state.tabletReducer.loading,
  tablets: state.tabletReducer.tablets
})

const mapDispatchToProps = (dispatch) => ({
  getTablets: () => dispatch(actionGetTablets()),
  selectTablet: (tablet) => dispatch(actionOnSelectTablet(tablet))

})


export default connect(mapStateToProps, mapDispatchToProps)(SelectScreen)


