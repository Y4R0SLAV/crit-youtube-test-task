import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunkMiddleware from 'redux-thunk'
import mainReducer from './mainPageReducer';

let rootReducer = combineReducers({
  main: mainReducer
})

type RootReducerType = typeof rootReducer  // (globalState: GLOBALSTATE) => GLOBALSTATE
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

// @ts-ignore
window.__store__ = store

export default store