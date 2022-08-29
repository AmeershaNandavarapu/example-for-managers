import reducers from '../redux/reducers'
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
const store=createStore(reducers,composeWithDevTools(applyMiddleware(logger)));
export default store