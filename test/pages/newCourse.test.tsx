import React from 'react'
import { render, screen } from '@testing-library/react'
import NewCourse from '../../pages/new-course'

describe('NewCourse page', () => {
  it('renders NewCourse component', () => {
    render(<NewCourse />)

    screen.debug()
  })
})
