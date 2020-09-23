import { all, put } from 'redux-saga/effects'
import { loadSaga } from './load'
import { tabletSaga } from './tablet'

//executa midelware initial, no data persit available
function* init() {
  console.log('init')
}

export default function* () {
  yield all([
    init(),
    loadSaga(),
    tabletSaga()
  ])
}