import React from 'react'
import { render, screen } from '@testing-library/react'
import FinishGame from '../../pages/finish-game'

describe('FinishGame page', () => {
  it('renders FinishGame component', () => {
    render(<FinishGame />)

    screen.debug()
  })
})
