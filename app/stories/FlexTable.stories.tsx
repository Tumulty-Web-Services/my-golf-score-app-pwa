import React from 'react'
import FlexTable from '../components/FlexTable'
import './FlexTable.css'
export default { title: 'Flex Table' }

const items = [
  {
    itemOne: 'Rutgers University Course',
    itemTwo: '98',
    itemThree: null
  },
  {
    itemOne: 'Bunker Hill',
    itemTwo: '110',
    itemThree: null
  },
  {
    itemOne: 'Tamarack',
    itemTwo: '113',
    itemThree: null
  },
  {
    itemOne: 'Mattawang Golf Course',
    itemTwo: '116',
    itemThree: null
  },
  {
    itemOne: 'Hillsborough Country Club',
    itemTwo: '100',
    itemThree: null
  },
  {
    itemOne: 'Hominy Hill',
    itemTwo: '112',
    itemThree: null
  },
  {
    itemOne: 'Forge Pond',
    itemTwo: '98',
    itemThree: null
  },
  {
    itemOne: 'Shark River Golf Course',
    itemTwo: '102',
    itemThree: null
  }
];

export const SiteFlexTable = () => <FlexTable tableItems={items} />