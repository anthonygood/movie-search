import React, { PropTypes } from 'react'

class SearchInput extends React.Component {
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
      <input onChange={this._change} onFocus={this._onFocus} onBlur={this._onBlur}></input>
    )
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
      this.props.onSubmit(this.state.query)
    }
  }
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SearchInput
