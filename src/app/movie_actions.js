import * as types from "./action_types"
import movieAPI from '../lib/themoviedb'

// Read API_KEY from env
movieAPI.common.api_key = process.env.API_KEY

const onSearchSuccess = (response) => {
  return { type: types.SEARCH_SUCCESS, results: JSON.parse(response).results }
}

const onSearchError = (state, response) => {
  return { type: types.SEARCH_FAILURE }
}

// When the user searches, we return a thunk which will dispatch either success or failure actions.
const onSearch = (query) => {
  return (dispatch) => {
    return movieAPI.search.getMovie(
      {query},
      (response) => { return dispatch(onSearchSuccess(response)) },
      (response) => { return dispatch(onSearchError(response)) }
    )
  }
}

export default { onSearch }
