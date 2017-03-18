import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import movieStore from './app/movie_store'
import App from './app/app'

ReactDOM.render(
  <Provider store={ movieStore() }>
    <App />
  </Provider>,
  document.getElementById('root')
)
