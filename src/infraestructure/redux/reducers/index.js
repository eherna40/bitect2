import { combineReducers } from 'redux';
import loadReducer from './load'
import videosReducer from './videos'
import tabletReducer from './tablet'

export default combineReducers({
    loadReducer,
    videosReducer,
    tabletReducer
})