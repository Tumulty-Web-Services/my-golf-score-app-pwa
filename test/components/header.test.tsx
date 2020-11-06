import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'

describe('Header component', () => {
  it('renders Header component', () => {
    render(<Header />)

    screen.debug()
  })

  it('renders Contact link', () => {
    render(<Header />)

    expect(screen.getByText(/Contact/)).toBeDefined()
    expect(screen.getByText(/Contact/).closest('a')).toBeDefined()
  })
})
