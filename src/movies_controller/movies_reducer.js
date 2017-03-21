const DEFAULT_STATE = {
  results: [],
  searchCount: 0,
  searching: false,
  selectedMovie: null
}

const addToState = (state, object) => {
  return Object.assign({}, state, object)
}

const searchBegin = (state) => {
  return addToState(state, { searching: true })
}

const searchSuccess = (state, results) => {
  return addToState(state, { searching: false, searchCount: state.searchCount+1, results: results })
}

const searchError = (state) => {
  return addToState(state, { searching: false, searchCount: state.searchCount+1, results: [] })
}

const selectMovie = (state, movie) => {
  return addToState(state, { selectedMovie: movie })
}

export default (actionType, state = DEFAULT_STATE, ...args) => {
  switch(actionType) {
    case 'search:begin':
      return searchBegin(state)

    case 'search:success':
      return searchSuccess(state, ...args)

    case 'search:error':
      return searchError(state)

    case 'movie:select':
      return selectMovie(state, ...args)

    default:
      return state
  }
}
