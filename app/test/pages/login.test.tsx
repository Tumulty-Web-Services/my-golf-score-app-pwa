import React from 'react'
import { render } from '@testing-library/react'
import Login from '../../pages/login'

describe('Login page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Login />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
