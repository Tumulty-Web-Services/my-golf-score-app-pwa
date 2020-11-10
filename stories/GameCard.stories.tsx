import React from 'react'
import GameCard from '../components/GameCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'
import './CourseHistory.css'
import './BtnStyles.css'
export default { title: 'Game Card' }

const props = {
  index: '0',
  path: '/',
  holeNum: '1',
  round: {
    round: 1,
    score: '2',
    par: '3',
    yards: '15',
  },
  handleHoleStorage: () => {
    alert('working button')
  },
}

export const Card = () => (
  <div style={{ maxWidth: '1000px' }}>
    <GameCard {...props} />
  </div>
)
