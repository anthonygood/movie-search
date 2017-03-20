import React, { Component } from 'react'
import movieAPI from '../lib/themoviedb'
import Poster from './Poster'
import './movie.css'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.imgSize = props.imgSize || 'w92'
  }

  render() {
    return (
      <div className='Movie' onClick={this._select.bind(this)}>
        <div className='info-container'>
          <Poster poster_path={this.props.poster_path} />
          <div className='info'>
            <span className='title'>{this.props.title}</span><span className='release'>
              {' '}
              {this._release()}
              <br />
              {this.props.vote_average}/10 {' '} ({this.props.vote_count} votes)
            </span>
          </div>
        </div>
      </div>
    )
  }

  _select() {
    this.props.selectMovie(this.props)
  }

  _release() {
    const release = this.props.release_date

    if(!release) { return '' }
    return '(' + release.match(/\d{4}/)[0] + ')'
  }
}

export default Movie
