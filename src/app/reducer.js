import { combineReducers } from 'redux'
import * as types from './action_types'

const DEFAULT_STATE = {
  results: []
}

const reducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case types.SEARCH_SUCCESS:
      return { results: action.results }

    case types.SEARCH_FAILURE:
      return { results: [] }

    default:
      return state
  }
}

export default reducer
