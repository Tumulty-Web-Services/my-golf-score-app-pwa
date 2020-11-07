import React from 'react'
import { render, screen } from '@testing-library/react'
import Logo from '../../components/Logo'

describe('Logo component', () => {
  it('renders Logo component', () => {
    render(<Logo />)

    expect(screen).toBeDefined()
  })

  it('renders Golf Journal h1', () => {
    render(<Logo />)

    expect(screen.getByText(/Golf Journal/)).toBeDefined()
    expect(screen.getByText(/Golf Journal/).closest('h1')).toBeDefined()
  })
})
