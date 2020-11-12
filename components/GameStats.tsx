import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import styles from '../styles/CourseHistory.module.css'

const GameStats = (): JSX.Element => {
  const [preGameResults, setPreGameResults] = useState(true)
  const [finishedRound, setFinishedRound] = useState([])
  const [finishedScore, setFinishedScore] = useState('')
  const [finishedCourse, setFinishedCourse] = useState('')

  useEffect(() => {
    function mapRoundFromStorage() {
      const roundsInStorage = localStorage.getItem('rounds')
      const courseInStorage = localStorage.getItem('course')
      const scoreInStorage = localStorage.getItem('totalScore')

      const parsedRound = JSON.parse(roundsInStorage)

      if (
        finishedRound !== null &&
        finishedRound.length <= 0 &&
        parsedRound.length > 0
      ) {
        setFinishedRound(parsedRound)
      }

      if (
        finishedCourse !== null &&
        finishedCourse !== '' &&
        courseInStorage !== ''
      ) {
        setFinishedCourse(courseInStorage)
      }

      if (
        finishedScore !== null &&
        finishedScore !== '' &&
        scoreInStorage !== ''
      ) {
        setFinishedScore(scoreInStorage)
      }

      setPreGameResults(false)
    }

    if (preGameResults === true) {
      mapRoundFromStorage()
    }
  })

  return (
    <div
      className={`${styles.courseHistoryContainer} stories-courseHistoryContainer`}
    >
      <div className="d-block w-100">
        <h2>
          <small className="d-block">{finishedCourse}</small>
        </h2>
      </div>
      <div className="d-flex justify-content-between">
        <h2>
          <small className="d-block">Final Stats</small>
          <small className="d-block">Score: {finishedScore}</small>
        </h2>
        <Button variant="outline-dark" className="mb-3" href="/profile">
          Home
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Yards</th>
            <th>Par</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {finishedRound !== null &&
            finishedRound.length <= 0 &&
            finishedRound.map((game) => (
              <tr key={game.round}>
                <td>{game.round}</td>
                <td>{game.yards}</td>
                <td>{game.par}</td>
                <td>{game.score}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button variant="outline-dark" className="w-100 mb-3" href="/profile">
        Home
      </Button>
    </div>
  )
}

export default GameStats
