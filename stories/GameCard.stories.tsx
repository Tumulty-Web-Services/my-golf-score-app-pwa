import React from 'react'
import GameCard from '../components/GameCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'
import './CourseHistory.css'
import './BtnStyles.css'
export default { title: 'Game Card' }

const props = {
  index: '0',
  path: '/game',
  holeNum: '1',
  handlePar: (e) => {
    return e
  },
  handleScore: (e) => {
    return e
  },
  handleYards: (e) => {
    return e
  },
  handHoleStorage: (e) => {
    return e
  },
  gamePlaceHolders: {
    score: 'Score',
    par: 'Par',
    yards: 'Yards',
  },
}

export const Card = () => (
  <div style={{ maxWidth: '1000px' }}>
    <GameCard {...props} />
  </div>
)
