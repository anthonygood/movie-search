import { createStore, applyMiddleware } from 'redux'
import movieReducer from './movie_reducer'
import thunk from 'redux-thunk'

export default (initialState) => {
  return createStore(
    movieReducer,
    initialState,
    applyMiddleware(thunk)
  )
}
