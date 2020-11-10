import React from 'react'
import { render, screen } from '@testing-library/react'
import GameCard from '../../components/GameCard'

describe('GameCard component', () => {
  const props = {
    index: '0',
    path: '/',
    holeNum: '1',
    round: {
      round: 1,
      score: '2',
      par: '3',
      yards: '15',
    },
    handleHoleStorage: () => {
      alert('working button')
    },
  }

  it('renders GameCard component', () => {
    render(<GameCard {...props} />)

    expect(screen).toBeDefined()
  })

  // it('renders Congratulations on the par! 👍', () => {
  //   render(<GameCard {...props} />)

  //   expect(screen.getByText(/Congratulations on the par! 👍/)).toBeDefined()
  // })
})
