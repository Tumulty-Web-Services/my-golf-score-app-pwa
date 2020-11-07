import React from 'react'
import { render, screen } from '@testing-library/react'
import GameStats from '../../components/GameStats'

describe('GameStats component', () => {
  it('renders GameStats component', () => {
    render(<GameStats index="9" />)

    expect(screen).toBeDefined()
  })

  it('renders Final Stats', () => {
    render(<GameStats index="9" />)

    expect(screen.getByText(/Final Stats/)).toBeDefined()
  })
})
