import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchInput from '../search_input/SearchInput'
import SearchResults from '../search_results/SearchResults'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className={this._className()}>
        <SearchInput onSubmit={this.props.actions.onSearch} />
        <SearchResults {...this.props} />
      </div>
    )
  }

  _className() {
    return 'App ' + (this.props.searching ? 'loading' : '')
  }
}

export default App
