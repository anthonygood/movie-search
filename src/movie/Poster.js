import React, { Component } from 'react'
import movieAPI from '../lib/themoviedb'
import './poster.css'

class Poster extends Component {
  constructor(props) {
    super(props)
    this.imgSize = props.imgSize || 'w92'
  }

  render() {
    return(
      <div className='Poster'>
        <img src={this._imgSrc()} />
      </div>
    )
  }

  _imgSrc() {
    if(!this.props.poster_path) { return '' }

    return movieAPI.common.getImage({
      size: this.imgSize,
      file: this.props.poster_path
    })
  }
}

export default Poster
