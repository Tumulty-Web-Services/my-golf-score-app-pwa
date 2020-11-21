import React from 'react'
import { render, screen } from '@testing-library/react'
import ReplayCourse from '../../pages/replay/course'

describe('ReplayCourse page', () => {
  it('renders ReplayCourse component', () => {
    render(<ReplayCourse />)

    expect(screen).toBeDefined()
  })
})
