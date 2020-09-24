

import {
    call,
    takeEvery,
    put,
    select,
    fork,
    race,
    delay
} from 'redux-saga/effects'
import { getTablets, selectTablet } from '../../api/API'
import * as RootNavigation from '../../services/RootNavigation'
import { GET_ALL_TABLETS, GET_ALL_TABLETS_FAILED, GET_ALL_TABLETS_SUCCESS, ON_SELECT_TABLET, ON_SELECT_TABLET_FAILED } from '../constants/tablet'

var RNFS = require('react-native-fs');

function* getTables() {
    try {
        const { status, data } = yield call(getTablets)
        if (status === 'success') {
            yield put({ type: GET_ALL_TABLETS_SUCCESS, tablets: data })
        } else {
            yield put({ type: GET_ALL_TABLETS_FAILED })

        }
    } catch (error) {
        console.log(error)
    }

}

function* onSelectTablet({ id }) {
    try {
        const { status, data } = yield call(selectTablet, id)
        if (status === 'success') {

            RNFS.downloadFile({
                fromUrl: "https://bitec.okoiagency.com/modules/productvideos/views/videos/2/1.3 ¿Por qué es inteligente.mp4",
                toFile: 'video-1.mp4'

            }).promise.then((response) => {console.log(response)})
            let videos = data.childs.filter(i => {
                i.products = i.products.filter(video => {
                    video.path = 'ss'
                    return video
                })
                return i
            })
            console.log(videos)
        } else {
            yield put({ type: ON_SELECT_TABLET_FAILED })
        }
    } catch (error) {
        console.log(error)
    }
}
export function* tabletSaga() {
    yield takeEvery(GET_ALL_TABLETS, getTables)
    yield takeEvery(ON_SELECT_TABLET, onSelectTablet)
}