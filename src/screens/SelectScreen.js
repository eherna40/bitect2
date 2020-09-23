import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { actionGetTablets } from '../infraestructure/redux/actions/tablets'
import { Margins, Paddings } from '../infraestructure/Theme'
// import { getTablets,selectTablet } from '../infraestructure/api/API'
// import Tablet from '../components/Listing/Tablet';
// import { StorageService, DownloadService } from '@common';
// import H3 from '../components/paragraph/H3';
// import P from '../components/paragraph/P';

// const STORAGE_VIDEOS = '@storage_videos';
// const STORAGE_TABLE = '@storage_table';
// const STORAGE_CAMPAIGN = '@storage_campaign';

const SelectScreen = ({ getTablets }) => {

  useEffect(() => {
    getTablets()
  }, [])
  // const [tablets, settablets] = useState([])

  // useEffect(() => {
  //     (async function () {
  //         const { status, data } = await getTablets()
  //         if (status == 'success') {
  //             settablets(data)
  //         }
  //     })();
  // }, []);

  // const onSelect = async(id) => {
  //   const {status, data} = await selectTablet(id)
  //   if(status == 'success') {
  //     await StorageService.storeData(STORAGE_TABLE, id);
  //     await StorageService.storeData(STORAGE_CAMPAIGN, data.id);
  //     await StorageService.removedStoredData(STORAGE_VIDEOS);
  //     await DownloadService.downloadFiles(data, id);
  //     navigation.navigate('Home', { reload: true })
  //   }
  // }

  return (
    <View style={[styles.container, Paddings.h30, Margins.t20]}>
      {/* <H3 text='SELECCIONA DISPOSITIVO' /> */}
      {/* <P text='Selecciona el codigo de tablet para asignarle la campaña. Cada tablet va asociada a una campaña y a un centro' /> */}
      {/* <Tablet
            onPress={onSelect}
            data={tablets}
        /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = (state) => ({
  error: state.loadReducer.error
})

const mapDispatchToProps = (dispatch) => ({
  getTablets: () => dispatch(actionGetTablets())
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectScreen)


