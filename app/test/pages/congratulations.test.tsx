import React from 'react'
import { render, screen } from '@testing-library/react'
import Congratulations from '../../pages/congratulations'

describe('Congratulations page', () => {
  it('renders Congratulations component', () => {
    render(<Congratulations />)

    screen.debug()
  })
})
