import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer'

describe('Footer component', () => {
  it('renders Footer component', () => {
    render(<Footer />)

    expect(screen).toBeDefined()
  })

  it('renders Tumulty Web Services', () => {
    render(<Footer />)

    expect(screen.getByText(/Tumulty Web Services/)).toBeDefined()
  })
})
