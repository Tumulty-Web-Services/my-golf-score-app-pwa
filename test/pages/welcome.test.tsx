import React from 'react'
import { render, screen } from '@testing-library/react'
import Welcome from '../../pages/welcome'

describe('Welcome page', () => {
  it('renders Welcome component', () => {
    render(<Welcome user="" />)

    screen.debug()
  })
})
