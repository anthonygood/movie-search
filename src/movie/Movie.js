import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}

export default Movie
