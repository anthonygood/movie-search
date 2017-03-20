import React from 'react'
import { shallow } from 'enzyme'
import SearchInput from '../SearchInput'

describe('SearchInput', () => {

  const wrapper = shallow(
    <SearchInput onSubmit={()=>{}} />
  )

  describe('button', () => {
    it('is disabled without query', () => {
      expect(wrapper.instance()._disabled()).toEqual(true)
    })

    it('is enabled with query present', () => {
      wrapper.setState({ query: 'foo' })

      expect(wrapper.instance()._disabled()).toEqual(false)
    })
  })
})
