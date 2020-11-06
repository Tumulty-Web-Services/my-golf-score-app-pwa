import React from 'react'
import { render, screen } from '@testing-library/react'
import Finish from '../../pages/finish'

describe('Finish page', () => {
  it('renders Finish component', () => {
    render(<Finish />)

    screen.debug()
  })
})
