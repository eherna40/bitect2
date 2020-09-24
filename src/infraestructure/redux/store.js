import { createStore, applyMiddleware, compose } from 'redux';

//redux persist
import { persistStore, persistReducer } from 'redux-persist'

//mandatory for react > 0.60+
import AsyncStorage from '@react-native-community/async-storage';

//redux-logger
import { createLogger } from 'redux-logger'

//sagas
import createSagaMiddleware from 'redux-saga'
import saga from './saga';

//reducers
import Reducers from './reducers'

const logger = createLogger({
  collapsed: true
});

let middlewares = [];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['videosReducer', 'tabletReducer']
}

const persistedReducer = persistReducer(persistConfig, Reducers)
const sagaMiddleware = createSagaMiddleware()

middlewares.push(logger);

//saga init
middlewares.push(sagaMiddleware)


let store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)))
let persistor = persistStore(store)

sagaMiddleware.run(saga)

export { store, persistor }
