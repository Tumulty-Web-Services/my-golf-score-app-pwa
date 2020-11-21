import React from 'react'
import { render, screen } from '@testing-library/react'
import Game from '../../pages/new/game'

describe('Game page', () => {
  const Props = {
    course: 'Bunker Hill',
    length: 'nine',
  }

  it('renders Game component', () => {
    render(<Game {...Props} />)

    expect(screen).toBeDefined()
  })
})
