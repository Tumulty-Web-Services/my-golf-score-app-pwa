import React from 'react'
import { render, screen } from '@testing-library/react'
import CourseInformation from '../../pages/course-information'

describe('CourseInformation page', () => {
  it('renders CourseInformation component', () => {
    render(<CourseInformation />)

    screen.debug()
  })
})
