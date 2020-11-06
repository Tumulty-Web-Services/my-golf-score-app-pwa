import React from 'react'
import { render, screen } from '@testing-library/react'
import Game from '../../pages/game'

describe('Game page', () => {
  it('renders Game component', () => {
    render(<Game />)

    screen.debug()
  })
})
