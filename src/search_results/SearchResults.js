import React, { Component } from 'react'
import Movie from '../movie/Movie'

class SearchResults extends Component {
  render() {
    // We should show something different for these states:
    // 1) No search done yet
    // 2) Search done with results
    // 3) Search done without any results
    if(!this.props.searchCount) {
      return this._prompt()
    } else if(this.props.results.length > 0) {
      return this._results()
    } else {
      return this._noResults()
    }
  }

  // TODO:
  // Consider prompt?
  _prompt() {
    return (<div></div>)
  }

  _results() {
    return (
      <div>
        {this.props.results.map((movie)=> <Movie key={movie.id} {...movie} />)}
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
