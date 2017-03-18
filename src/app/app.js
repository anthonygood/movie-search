import React from 'react'
import ReactDOM from 'react-dom'

import movieAPI from '../lib/themoviedb'

// Read API_KEY from env
movieAPI.common.api_key = process.env.API_KEY

window.key = process.env.API_KEY

class App extends React.Component {
  render() {
    console.log(movieAPI)
    window.movieAPI = movieAPI
    return (
      <div>
        <h1>Hello World.</h1>
      </div>
    )
  }
}

const app = document.getElementById('root')
ReactDOM.render(<App />, app)
