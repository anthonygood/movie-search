import React, { Component, PropTypes } from 'react'
import './search_input.css'

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this._change = this._change.bind(this)
    this._onFocus = this._onFocus.bind(this)
    this._onBlur = this._onBlur.bind(this)
    this._keyup = this._keyup.bind(this)
    this.state = { query: '' }
  }

  render() {
    return (
      <div className='SearchInput'>
        <input autoFocus placeholder={'Search for a movie'} onChange={this._change} onFocus={this._onFocus} onBlur={this._onBlur}></input>
        <button disabled={this._disabled()} onClick={this._submitQuery.bind(this)}>GO</button>
      </div>
    )
  }

  _disabled() {
    // Button is disabled unless a query is present
    return !this.state.query.length
  }

  _change(event) {
    this.setState({ query: event.target.value })
  }

  _onFocus() {
    document.addEventListener('keyup', this._keyup)
  }

  _onBlur() {
    document.removeEventListener('keyup', this._keyup)
  }

  _keyup(event) {
    if(event.code === 'Enter') {
      this._submitQuery()
    }
  }

  _submitQuery() {
    if(this.state.query.length) { this.props.onSubmit(this.state.query) }
  }
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SearchInput
