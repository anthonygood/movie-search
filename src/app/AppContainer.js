import App from './App'
import movieActions from './actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import movieAPI from '../lib/themoviedb'

// Set API_KEY from env
movieAPI.common.api_key = process.env.API_KEY

window.movieAPI = movieAPI

const mapStateToProps = (state, props) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
