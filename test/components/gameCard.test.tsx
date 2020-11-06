import React from 'react'
import { render, screen } from '@testing-library/react'
import GameCard from '../../components/GameCard'

describe('GameCard component', () => {
  it('renders GameCard component', () => {
    render(<GameCard index="0" path="/game" />)

    screen.debug()
  })

  it('renders Congratulations on the par! 👍', () => {
    render(<GameCard index="0" path="/game" />)

    expect(screen.getByText(/Congratulations on the par! 👍/)).toBeDefined()
  })
})
