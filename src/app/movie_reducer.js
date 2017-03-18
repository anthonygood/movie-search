import { combineReducers } from "redux"
import * as types from "./action_types"
import movieAPI from "../lib/themoviedb"

// Read API_KEY from env
movieAPI.common.api_key = process.env.API_KEY

const DEFAULT_STATE = {
  results: []
}

const onSearchSuccess = (state, response) => {
  const json = JSON.parse(response)
  return { results: json.results }
}

const onSearchError = (state, response) => {
  console.error(response)
}

const search = (state, query) => {
  console.log(query)

  movieAPI.search.getMovie(
    {query},
    (response) => onSearchSuccess(state, response),
    (response) => onSearchError(state, response)
  )
}

const reducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case types.SEARCH:
      return search(state, action.query)

    default:
      return state
  }
}

export default reducer
