import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle'
import styles from '../styles/GameCard.module.css'
import btnStyles from '../styles/BtnStyles.module.css'

type Props = {
  index: string
  path: string
  holeNum: string
  handlePar: any
  handleScore: any
  handleYards: any
  handHoleStorage: any
  gamePlaceHolders: {
    score: string
    par: string
    yards: string
  }
}

const GameCard = ({
  index,
  path,
  holeNum,
  handlePar,
  handleScore,
  handleYards,
  handHoleStorage,
  gamePlaceHolders,
}: Props) => {
  const [yards, setYards] = useState('')
  const [par, setPar] = useState('')
  const [score, setScore] = useState('')
  const router = useRouter()
  let currentPath = path

  if (router !== null) {
    currentPath = router.pathname
  }

  const goodScore = false

  return (
    <Toast
      className={`${styles.mw100} stories-mw100 mw-75 mb-4 p-3 d-flex flex-column`}
    >
      <h4 className="d-flex h-25">
        <Badge
          variant="secondary"
          className={`${styles.gameBadge} stories-gameBadge`}
        >
          {index}
        </Badge>
        {goodScore && (
          <small
            className={`${styles.gameAlert} stories-gameAlert ml-2 d-block my-1 px-2`}
          >
            Congratulations on the par! 👍
          </small>
        )}
      </h4>
      <div className="input-container mt-2 mb-3">
        {currentPath === '/game' && (
          <>
            <input
              type="number"
              placeholder={gamePlaceHolders.yards}
              min="1"
              max="1000"
              className={`${styles.inputWidth} stories-inputWidth mr-4 rounded`}
              value={yards}
              onChange={(e) => {
                setYards(e.target.value)
                handleYards(e.target.value)
              }}
            />
            <input
              type="number"
              placeholder={gamePlaceHolders.par}
              min="3"
              max="5"
              className={`${styles.inputWidth} stories-inputWidth mr-4 rounded`}
              value={par}
              onChange={(e) => {
                setPar(e.target.value)
                handlePar(e.target.value)
              }}
            />
          </>
        )}

        {currentPath === '/replay-game' && (
          <>
            <p className="mb-0 pb-0">
              <strong>Yards: </strong>
              {gamePlaceHolders.yards}
            </p>
            <p className="mb-0 pb-0">
              <strong>Par: </strong>
              {gamePlaceHolders.par}
            </p>
          </>
        )}
        <input
          type="number"
          placeholder={gamePlaceHolders.score}
          min="1"
          max="10"
          className={`${styles.inputWidth} stories-inputWidth mr-4 rounded`}
          value={score}
          onChange={(e) => {
            setScore(e.target.value)
            handleScore(e.target.value)
          }}
        />
      </div>
      <Button
        className={`${btnStyles.orange} stories-orange ${styles.btn} stories-btn mb-2`}
        onClick={() => handHoleStorage(holeNum)}
      >
        <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
        Save
      </Button>
    </Toast>
  )
}

export default GameCard
