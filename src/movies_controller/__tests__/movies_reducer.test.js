import reducer from '../movies_reducer'

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

  describe('search:begin', () => {
    it('toggles `searching` boolean', () => {
      const newState = reducer('search:begin', defaultState)
      expect(newState.searching).toEqual(true)
    })
  })

  describe('search:success', () => {
    const results = [{ foo: 'bar' }]
    const newState = reducer('search:success', defaultState, results)

    it('adds results to state', () => {
      expect(newState.results).toEqual(results)
    })

    it('increments search count', () => {
      expect(newState.searchCount).toEqual(1)
    })
  })

  describe('select:movie', () => {
    const movie = { title: 'The Godfather' }
    const newState = reducer('movie:select', defaultState, movie)

    it('adds movie to state', () => {
      expect(newState.selectedMovie).toEqual(movie)
    })
  })
})