import React from 'react'
import { render, screen } from '../testutils'
import { cache } from 'swr'
import ReplayGame from '../../pages/replay/game'

describe('ReplayGame page', () => {
  const Props = {
    course: 'Bunker Hill',
    user: 'mmichigan@gmail.com',
  }

  afterEach(() => {
    cache.clear()
  })

  it('renders ReplayGame component', () => {
    render(<ReplayGame {...Props} />)

    expect(screen).toBeDefined()
  })
})
