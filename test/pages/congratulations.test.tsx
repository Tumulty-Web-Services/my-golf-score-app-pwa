import React from 'react'
import { render, screen } from '@testing-library/react'
import Congratulations from '../../pages/congratulations/[...slug]'

describe('Congratulations page', () => {
  const query = {
    score: '3',
  }
  it('renders Congratulations component', () => {
    render(<Congratulations {...query} />)

    screen.debug()
  })
})
