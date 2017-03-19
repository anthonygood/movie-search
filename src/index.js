import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import movieStore from './app/store'
import App from './app/AppContainer'

ReactDOM.render(
  <Provider store={ movieStore() }>
    <App />
  </Provider>,
  document.getElementById('root')
)
