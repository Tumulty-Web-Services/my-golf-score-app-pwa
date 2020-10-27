import React from 'react'
import Card from '../layouts/Card'
import SubTitle from '../components/SubTitle'
import FlexTable from '../components/FlexTable'
import './Card.css'

export default { title: 'Card' }

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

export const cardWithTwoItems = () => (
  <Card>
    <>
      <SubTitle title="Course History" />
      <FlexTable tableItems={twoItems} />
    </>
  </Card>
)

export const cardWithThreeItems = () => (
  <Card>
    <>
      <SubTitle title="Course Finished" />
      <SubTitle title="Your Score: 8" />
      <p className="final-score-title">
        <strong>Par | Score</strong>
      </p>
      <FlexTable tableItems={threeItems} />
    </>
  </Card>
)
