import React from 'react'
import { render, screen } from '@testing-library/react'
import GameCard from '../../components/GameCard'

describe('GameCard component', () => {
  const props = {
    index: '0',
    path: '/game',
    holeNum: '1',
    handlePar: (e) => {
      return e
    },
    handleScore: (e) => {
      return e
    },
    handleYards: (e) => {
      return e
    },
    handHoleStorage: (e) => {
      return e
    },
    gamePlaceHolders: {
      score: 'Score',
      par: 'Par',
      yards: 'Yards',
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
