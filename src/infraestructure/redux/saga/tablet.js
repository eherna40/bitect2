

import {
    call,
    takeEvery,
    put,
    select,
    fork,
    race,
    delay
} from 'redux-saga/effects'
import { getTablets } from '../../api/API'
import * as RootNavigation from '../../services/RootNavigation'
import { GET_ALL_TABLETS, GET_ALL_TABLETS_FAILED, GET_ALL_TABLETS_SUCCESS } from '../constants/tablet'

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

export function* tabletSaga() {
    yield takeEvery(GET_ALL_TABLETS, getTables)
}