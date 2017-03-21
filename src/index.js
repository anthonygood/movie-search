import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import connectController from './movies_controller/movies_controller'
import './main.css'
import movieAPI from './lib/themoviedb'

// Set API_KEY from env
movieAPI.common.api_key = process.env.API_KEY

ReactDOM.render(
  <App connectController={connectController} />,
  document.getElementById('root')
)
