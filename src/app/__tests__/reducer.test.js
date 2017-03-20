import reducer from '../reducer'

describe('reducer', () => {
  const defaultState = reducer()

  describe('default state', () => {
    it('is correct', () => {
      expect(defaultState).toEqual({
        results: [],
        searchCount: 0,
        searching: false,
        selectedMovie: null
      })
    })
  })

  describe('SEARCH_BEGIN', () => {
    it('toggles `searching` boolean', () => {
      const newState = reducer(defaultState, { type: 'SEARCH_BEGIN' })
      expect(newState.searching).toEqual(true)
    })
  })

  describe('SEARCH_SUCCESS', () => {
    const results = [{ foo: 'bar' }]
    const newState = reducer(defaultState, {
      type: 'SEARCH_SUCCESS',
      results: results
    })

    it('adds results to state', () => {
      expect(newState.results).toEqual(results)
    })

    it('increments search count', () => {
      expect(newState.searchCount).toEqual(1)
    })
  })

  describe('SELECT_MOVIE', () => {
    const movie = { title: 'The Godfather' }
    const newState = reducer(defaultState, {
      type: 'SELECT_MOVIE',
      movie
    })

    it('adds movie to state', () => {
      expect(newState.selectedMovie).toEqual(movie)
    })
  })
})
