import reducers from '../redux/reducers'
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'



const persistConfig={
    key:'persist-root',
    storage
}

const persistedReducer=persistReducer(persistConfig,reducers)


const store=createStore(persistedReducer,composeWithDevTools(applyMiddleware(logger)));
export const persistor=persistStore(store)
export default store