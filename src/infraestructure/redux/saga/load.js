

import {
    call,
    takeEvery,
    put,
    select,
    fork,
    race,
    delay
} from 'redux-saga/effects'
import { LOAD } from '../constants/load'
import * as RootNavigation from '../../services/RootNavigation'
import { getTablet } from '../selectors'
import { getTablets, selectTablet } from '../../api/API'


function* loadApp() {
    try {
        yield delay(2000)
        const tablet = yield select(getTablet)
        if (tablet.id) {
            RootNavigation.navigate('Home')
        } else {
            RootNavigation.navigate('Select')
        }
        // RootNavigation.navigate('Select')
    } catch (error) {
        console.log(error)
    }

}

export function* loadSaga() {
    yield takeEvery(LOAD, loadApp)
}