import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import connectController from '../../movies_controller/movies_controller'

describe('App', () => {
  const app = shallow(
    <App connectController={connectController} />
  )

  describe('className', () => {
    describe('not searching', () => {
      const app = shallow(
        <App searching={false} connectController={connectController} />
      )

      it('is simply App', () => {
        expect(app.find('.App').hasClass('loading')).toEqual(false)
      })
    })

    describe('when search request is pending', () => {
      app.instance().setState({ searching: true })

      it('adds .loading class', () => {
        expect(app.find('.App').hasClass('loading')).toEqual(true)
      })
    })
  })
})
