import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'

describe('Header component', () => {
  it('renders Header component', () => {
    render(<Header />)

    screen.debug()
  })

  it('renders GOLF JOURNAL title', () => {
    render(<Header />)

    expect(screen.getByText(/GOLF JOURNAL/)).toBeDefined()
  })
})
