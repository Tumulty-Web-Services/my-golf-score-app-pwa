import React from 'react'
import { render, screen } from '@testing-library/react'

import FlexTable from '../../components/FlexTable'

const twoItems = [
  {
    itemOne: 'Rutgers University Course',
    itemTwo: '98',
    itemThree: null,
  },
  {
    itemOne: 'Bunker Hill',
    itemTwo: '110',
    itemThree: null,
  },
  {
    itemOne: 'Tamarack',
    itemTwo: '113',
    itemThree: null,
  },
  {
    itemOne: 'Mattawang Golf Course',
    itemTwo: '116',
    itemThree: null,
  },
  {
    itemOne: 'Hillsborough Country Club',
    itemTwo: '100',
    itemThree: null,
  },
  {
    itemOne: 'Hominy Hill',
    itemTwo: '112',
    itemThree: null,
  },
  {
    itemOne: 'Forge Pond',
    itemTwo: '98',
    itemThree: null,
  },
  {
    itemOne: 'Shark River Golf Course',
    itemTwo: '102',
    itemThree: null,
  },
]

const threeItems = [
  {
    itemOne: 'Hole One',
    itemTwo: '4',
    itemThree: '5',
  },
  {
    itemOne: 'Hole Two',
    itemTwo: '3',
    itemThree: '3',
  },
]

describe('FlexTable component', () => {
  it('renders FlexTable component', () => {
    render(<FlexTable tableItems={twoItems} />)

    screen.debug()
  })

  it('test each item has the data-testid set to flex-table', () => {
    const { container } = render(<FlexTable tableItems={twoItems} />)
    expect(container.querySelector(`[data-testid="flex-table"]`)).toBeDefined()
  })

  it('test each item is rendered in the table', async () => {
    const { container } = render(<FlexTable tableItems={threeItems} />)
    const listItems = container.querySelectorAll(`[data-testid="flex-table"]`)
    expect(listItems).toHaveLength(2)
  })
})
