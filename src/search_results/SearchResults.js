import React, { Component } from 'react'
import Movie from '../movie/movie'

class SearchResults extends Component {
  render() {
    if(this.props.results.length > 0) {
      return this._results()
    } else {
      return this._noResults()
    }
  }

  _results() {
    return (
      <div>
        {this.props.results.map((movie)=> <Movie {...movie} />)}
      </div>
    )
  }

  _noResults() {
    return (
      <div>No results to display</div>
    )
  }
}

export default SearchResults
