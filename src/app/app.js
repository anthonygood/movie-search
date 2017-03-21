import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import SearchInput from '../search_input/SearchInput'
import SearchResults from '../search_results/SearchResults'
import './app.css'

// The App component acts as a container and holds all the application's state.
// We defer state-managing logic to a controller, which interprets UI actions and returns new state.
//
class App extends Component {
  constructor(props) {
    super(props)

    this.controller = props.connectController(this)
  }

  render() {
    return (
      <div className={this._className()}>
        <SearchInput onSubmit={this.controller.onSearch} {...this.state} />
        <SearchResults selectMovie={this.controller.onSelect} {...this.state} />
      </div>
    )
  }

  _className() {
    return 'App ' + (this.state.searching ? 'loading' : '')
  }
}

App.propTypes = {
  connectController: PropTypes.func.isRequired
}

export default App
