

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
import { downloadFiles, downloadPrincipalFile } from '../../services/DownloadServices.js';
import * as RootNavigation from '../../services/RootNavigation'
import { GET_ALL_TABLETS, GET_ALL_TABLETS_FAILED, GET_ALL_TABLETS_SUCCESS, ON_SELECT_TABLET, ON_SELECT_TABLET_FAILED, ON_SELECT_TABLET_SUCCESS } from '../constants/tablet'
import { DOWNLOAD_VIDEOS_SUCCESS } from '../constants/videos';

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

function* onSelectTablet({ tablet }) {
    try {
        const { status, data } = yield call(selectTablet, tablet.id)

        if (status === 'success') {
            // principal_video = yield call(downloadPrincipalFile, data)
            // if (principal_video) {
            //     data.path = principal_video
            // }
            const videos = yield call(downloadFiles, data)
            console.log(videos)
            yield put({ type: ON_SELECT_TABLET_SUCCESS, tablet })
            yield put({ type: DOWNLOAD_VIDEOS_SUCCESS, videos: videos })
            RootNavigation.navigate('Home')
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