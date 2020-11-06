import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer'

describe('Footer component', () => {
  it('renders Footer component', () => {
    render(<Footer />)

    screen.debug()
  })

  it('renders Tumulty Web Services', () => {
    render(<Footer />)

    expect(screen.getByText(/Tumulty Web Services/)).toBeDefined()
  })
})
