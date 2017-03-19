import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as movieLib from '../../lib/themoviedb'
import actions from '../actions'

const middlewares = [ thunk ]
const mockStore   = configureMockStore(middlewares)

describe('movie actions', () => {
  describe('onSearch', () => {
    it('dispatches SEARCH action', () => {

      const store = mockStore({ results: [] })
      store.dispatch(actions.onSearch("Die Hard"))
      expect(store.getActions()).toEqual([
        { type: 'SEARCH_BEGIN' }
      ])
    })

    it('returns a thunk', () => {
      expect(typeof actions.onSearch("The Godfather")).toEqual('function')
    })
  })

  describe('success', () => {
    it('returns a SEARCH_SUCCESS action', () => {

      let mockResponse = { results: [{ foo: 'bar' }] }
      let mockFn = (query, successFn, errorFn) => {
        successFn(JSON.stringify(mockResponse))
      }

      movieLib.default.search.getMovie = mockFn

      const store = mockStore({ results: [] })
      store.dispatch(actions.onSearch("The Godfather"))
      expect(store.getActions()).toEqual([
        { type: 'SEARCH_BEGIN' },
        { type: 'SEARCH_SUCCESS', results: [{ foo: 'bar' }] }
      ])
    })
  })

  describe('error', () => {
    it('returns a SEARCH_ERROR', () => {

      let mockFn = (query, successFn, errorFn) => { errorFn() }
      movieLib.default.search.getMovie = mockFn

      const store = mockStore({ results: [] })
      store.dispatch(actions.onSearch("The Godfather"))
      expect(store.getActions()).toEqual([
        { type: 'SEARCH_BEGIN' },
        { type: 'SEARCH_ERROR' }
      ])
    })
  })
})
