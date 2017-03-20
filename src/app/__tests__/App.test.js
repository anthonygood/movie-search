import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('App', () => {
  const actions = { onSearch: ()=>{}, onSelect: ()=>{} }

  describe('className', () => {
    describe('not searching', () => {
      const app = shallow(
        <App searching={false} actions={ actions } />
      )

      it('is simply App', () => {
        expect(app.find('.App').hasClass('loading')).toEqual(false)
      })
    })

    describe('when search request is pending', () => {
      const app = shallow(
        <App searching={true} actions={ actions } />
      )

      it('adds .loading class', () => {
        expect(app.find('.App').hasClass('loading')).toEqual(true)
      })
    })
  })
})
