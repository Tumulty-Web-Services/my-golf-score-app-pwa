import React from 'react'
import { render, screen } from '@testing-library/react'
import Finish from '../../pages/finish'
import 'jest-localstorage-mock'

describe('Finish page', () => {
  beforeEach(() => {
    localStorage.setItem('course', 'Bunker Hill')
    localStorage.setItem('totalScore', '58')
    localStorage.setItem(
      'rounds',
      JSON.stringify({ round: '1', yards: 229, par: '3', score: 5 })
    )
  })

  it('renders Finish component', () => {
    render(<Finish />)

    expect(screen).toBeDefined()
  })
})
