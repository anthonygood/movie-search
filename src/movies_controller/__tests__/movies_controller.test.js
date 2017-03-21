import * as movieLib from '../../lib/themoviedb'
import connectController from '../movies_controller'
import React, { Component } from 'react'
import { shallow } from 'enzyme'

class TestComponent extends Component {
  render() {
    return (<div></div>)
  }
}

describe('connecting to movies reducer', () => {
  const wrapper = shallow(<TestComponent/>)

  // This should only be done in component constructor,
  // but for our test component it's OK.
  const controller = connectController(wrapper.instance())

  it('provides the instance\'s default state', () => {
    expect(wrapper.instance().state).toEqual({
      results: [],
      searchCount: 0,
      searching: false,
      selectedMovie: null
    })
  })

  describe('onSearch', () => {
    it('updates component state for beginning search', () => {
      controller.onSearch()
      expect(wrapper.instance().state.searching).toEqual(true)
    })
  })

  describe('search success', () => {
    it('updates component state with search results', () => {
      // Mock successful API call
      const mockResponse = { results: [{ foo: 'bar' }] }
      const mockFn = (query, successFn, errorFn) => {
        successFn(JSON.stringify(mockResponse))
      }

      movieLib.default.search.getMovie = mockFn

      controller.onSearch('Die Hard')

      expect(wrapper.instance().state).toEqual({
        results: mockResponse.results,
        searchCount: 1,
        searching: false,
        selectedMovie: null
      })
    })
  })

  describe('search error', () => {
    it('sets error state', () => {
      // Mock error in API call
      const mockFn = (query, successFn, errorFn) => errorFn()
      movieLib.default.search.getMovie = mockFn

      controller.onSearch('The Godfather')

      expect(wrapper.instance().state).toEqual({
        results: [],
        searchCount: 2,
        searching: false,
        selectedMovie: null
      })
    })
  })
})
