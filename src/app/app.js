import React from 'react'
import ReactDOM from 'react-dom'
import SearchInput from '../search_input/search_input'
import movieStore from "./movie_store"

const store = movieStore()

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World.</h1>
        <SearchInput />
      </div>
    )
  }
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)
