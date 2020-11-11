import React from 'react'
import { render, screen } from '@testing-library/react'
import CourseHistory from '../../components/CourseHistory'

describe('CourseHistory component', () => {
  const games = [
    {
      course: 'Forge Pond',
      score: '100'
    },
    {
      course: 'Bunker Hill',
      score: '120'
    }
  ]
  it('renders CourseHistory component', () => {
    render(<CourseHistory month="November 2020" games={games} />)

    expect(screen).toBeDefined()
  })

  it('renders month props', () => {
    render(<CourseHistory month="November" games={games}/>)

    expect(screen.getByText(/November/)).toBeDefined()
    expect(screen.getByText(/November/).closest('small')).toBeDefined()
  })
})
