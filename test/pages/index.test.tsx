import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

describe('Home page', () => {
  it('renders Home component', () => {
    render(<Home />)

    expect(screen).toBeDefined()
  })
})
