import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'

describe('Header component', () => {
  it('renders Header component', () => {
    render(<Header authed={false} />)

    expect(screen).toBeDefined()
  })

  it('does not render log out link', () => {
    render(<Header authed={false} />)
    expect(() => screen.getByText(/Logout/)).toThrow(
      'Unable to find an element'
    )
  })

  it('does render log out link', () => {
    render(<Header authed={true} />)

    expect(screen.getByText(/Logout/)).toBeDefined()
    expect(screen.getByText(/Logout/).closest('a')).toBeDefined()
  })
})
