import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <div className="Movie">
        {this.props.title}
      </div>
    )
  }
}

export default Movie
