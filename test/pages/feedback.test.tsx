import React from 'react'
import { render, screen } from '@testing-library/react'
import Feedback from '../../pages/feedback'

describe('Feedback page', () => {
  it('renders Feedback component', () => {
    render(<Feedback />)

    screen.debug()
  })
})
