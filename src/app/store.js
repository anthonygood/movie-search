import { createStore, applyMiddleware } from 'redux'
import movieReducer from './reducer'
import thunk from 'redux-thunk'

export default (initialState) => {
  return createStore(
    movieReducer,
    initialState,
    applyMiddleware(thunk)
  )
}
