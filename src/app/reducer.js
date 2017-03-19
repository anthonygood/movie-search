import { combineReducers } from 'redux'
import * as types from './action_types'

const DEFAULT_STATE = {
  results: [],
  searchCount: 0,
  searching: false
}

const addToState = (state, object) => {
  return Object.assign({}, state, object)
}

const searchSuccess = (state, action) => {
  return addToState({
    results:     action.results,
    searchCount: state.searchCount+1,
    searching:   false
  })
}

const searchError = (state, action) => {
  return addToState({
    results: [],
    searchCount: state.searchCount+1,
    searching: false
  })
}

const reducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case types.SEARCH_BEGIN:
      return addToState(state, { searching: true })

    case types.SEARCH_SUCCESS:
      return searchSuccess(state, action)

    case types.SEARCH_FAILURE:
      return searchError(state, action)

    default:
      return state
  }
}

export default reducer
