import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle'
import styles from 'styles/GameCard.module.css'
import btnStyles from 'styles/BtnStyles.module.css'

type Props = {
  index: string
  path: string
  holeNum: string
  round: any
  handleHoleStorage: any
}

const GameCard = ({
  index,
  path,
  holeNum,
  round,
  handleHoleStorage,
}: Props) => {
  const [yards, setYards] = useState('')
  const [par, setPar] = useState('')
  const [score, setScore] = useState('')
  const [preUpdate, setPreUpdate] = useState(true)
  const router = useRouter()
  let currentPath = path

  if (router !== null) {
    currentPath = router.pathname
  }

  const goodScore = false

  useEffect(() => {
    function setInputFieldsWithSavedData() {
      if (yards === '') {
        setYards(round.yards)
      }

      if (par === '') {
        setPar(round.par)
      }

      if (score === '') {
        setScore(round.score)
      }

      setPreUpdate(false)
    }

    if (preUpdate === true) {
      setInputFieldsWithSavedData()
    }
  })

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
        {currentPath === '/new/game' && (
          <>
            <input
              type="number"
              placeholder={round.yards}
              className={`${styles.inputWidth} stories-inputWidth mr-4 rounded`}
              value={yards}
              onChange={(e) => setYards(e.target.value)}
            />
            <input
              type="number"
              placeholder={round.par}
              className={`${styles.inputWidth} stories-inputWidth mr-4 rounded`}
              value={par}
              onChange={(e) => setPar(e.target.value)}
            />
          </>
        )}

        {currentPath === '/replay/game' && (
          <>
            <p className={`mb-0 pb-0 ${styles.gameDetails}`}>
              <strong>Yards: </strong>
              {round.yards}
            </p>
            <p className={`mb-0 pb-0 ${styles.gameDetails}`}>
              <strong>Par: </strong>
              {round.par}
            </p>
          </>
        )}
        <input
          type="number"
          placeholder={round.score}
          className={`${styles.inputWidth} stories-inputWidth mr-4 rounded`}
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </div>
      <Button
        className={`${btnStyles.orange} stories-orange ${styles.btn} stories-btn mb-2`}
        onClick={() =>
          handleHoleStorage({
            round: holeNum,
            yards: yards,
            par: par,
            score: score,
          })
        }
      >
        <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
        Save
      </Button>
    </Toast>
  )
}

export default GameCard
