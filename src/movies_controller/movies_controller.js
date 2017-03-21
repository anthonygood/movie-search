import movieAPI from '../lib/themoviedb'
import reducer from './movies_reducer'

// The `connect` function allows us to connect a component to the movies reducer for managing state.
// It exposes some controller-like functions to the component:
//
//    this.controller = this.props.connect(this)
//    this.controller.onSearch('foo') // handles updating the component's state for the given search
//
const connect = (component) => {
  const updateState = (actionType, ...args) => {
    component.setState(
      reducer(actionType, component.state, ...args)
    )
  }

  const defaultState    =         () => { return reducer() }
  const onSearchBegin   =         () => { updateState('search:begin') }
  const onSearchSuccess = (response) => { updateState('search:success', JSON.parse(response).results) }
  const onSearchError   =         () => { updateState('search:error') }

  const onSearch = (query) => {
    onSearchBegin()

    movieAPI.search.getMovie(
      { query },
      (response) => { onSearchSuccess(response) },
      (response) => { onSearchError(response) }
    )
  }

  const onSelect = (movie) => {
    updateState('movie:select', movie)
  }

  // Initialize the component's state.
  component.state = defaultState()

  return {
    onSearch,
    onSelect
  }
}

export default connect
