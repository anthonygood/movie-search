import { combineReducers } from 'redux'
import * as types from './action_types'

const DEFAULT_STATE = {
  results: [],
  searchCount: 0,
  searching: false,
  selectedMovie: null
}

const addToState = (state, object) => {
  return Object.assign({}, state, object)
}

const searchSuccess = (state, results) => {
  return addToState(state, {
    results:     results,
    searchCount: state.searchCount+1,
    searching:   false
  })
}

const searchError = (state) => {
  return addToState(state, {
    results: [],
    searchCount: state.searchCount+1,
    searching: false
  })
}

const selectMovie = (state, movie) => {
  return addToState(state, { selectedMovie: movie })
}

const reducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case types.SEARCH_BEGIN:
      return addToState(state, { searching: true })

    case types.SEARCH_SUCCESS:
      return searchSuccess(state, action.results)

    case types.SEARCH_ERROR:
      return searchError(state)

    case types.SELECT_MOVIE:
      return selectMovie(state, action.movie)

    default:
      return state
  }
}

export default reducer
