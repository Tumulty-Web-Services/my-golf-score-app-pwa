import React from 'react'
import { render, screen } from '@testing-library/react'
import ReplayGame from '../../pages/replay-game'

describe('ReplayGame page', () => {
  it('renders ReplayGame component', () => {
    render(<ReplayGame />)

    screen.debug()
  })
})
