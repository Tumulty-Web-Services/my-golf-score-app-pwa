import React from 'react'
import { render, screen } from '@testing-library/react'
import SocialMediaIcons from '../../components/SocialMediaIcons'

describe('SocialMediaIcons component', () => {
  it('renders SocialMediaIcons component', () => {
    render(<SocialMediaIcons />)

    expect(screen).toBeDefined()
  })
})
