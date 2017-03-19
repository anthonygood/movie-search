import React from 'react'
import ReactDOM from 'react-dom'
import SearchInput from '../search_input/search_input'
import movieActions from './movie_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Search for a movie:</h1>
        <SearchInput onSubmit={this.props.actions.onSearch} />
        <SearchResults {...this.props} />
      </div>
    )
  }
}

export default App
