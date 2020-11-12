import React from 'react'
import { render, screen } from '@testing-library/react'
import GameStats from '../../components/GameStats'
import 'jest-localstorage-mock'

describe('GameStats component', () => {
  beforeEach(() => {
    localStorage.setItem('course', 'Bunker Hill')
    localStorage.setItem('totalScore', '58')
    localStorage.setItem(
      'rounds',
      JSON.stringify({ round: '1', yards: 229, par: '3', score: 5 })
    )
  })
  it('renders GameStats component', () => {
    render(<GameStats />)

    expect(screen).toBeDefined()
  })

  it('renders Final Stats', () => {
    render(<GameStats />)

    expect(screen.getByText(/Final Stats/)).toBeDefined()
  })
})
