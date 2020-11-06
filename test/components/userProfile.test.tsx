import React from 'react'
import { render, screen } from '@testing-library/react'
import UserProfile from '../../components/UserProfile'

describe('UserProfile component', () => {
  it('renders UserProfile component', () => {
    render(<UserProfile path="/game" />)

    screen.debug()
  })

  it('renders Peter F. Tumulty h1', () => {
    render(<UserProfile path="/game" />)

    expect(screen.getByText(/Peter F. Tumulty/)).toBeDefined()
    expect(screen.getByText(/Peter F. Tumulty/).closest('h1')).toBeDefined()
  })
})
