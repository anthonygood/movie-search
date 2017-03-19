import * as types from './action_types'
import movieAPI from '../lib/themoviedb'

const onSearchBegin = () => {
  return { type: types.SEARCH_BEGIN }
}

const onSearchSuccess = (response) => {
  return { type: types.SEARCH_SUCCESS, results: JSON.parse(response).results }
}

const onSearchError = (state, response) => {
  return { type: types.SEARCH_ERROR }
}

// When the user searches, we return a thunk which will dispatch either success or failure actions.
const onSearch = (query) => {
  return (dispatch) => {
    dispatch(onSearchBegin())
    movieAPI.search.getMovie(
      { query },
      (response) => { dispatch(onSearchSuccess(response)) },
      (response) => { dispatch(onSearchError(response)) }
    )
  }
}

export default { onSearch }
