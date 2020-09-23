

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

function* loadApp() {
    try {
        yield delay(3000)
        RootNavigation.navigate('Select')
    } catch (error) {
        console.log(error)
    }

}

export function* loadSaga() {
    yield takeEvery(LOAD, loadApp)
}