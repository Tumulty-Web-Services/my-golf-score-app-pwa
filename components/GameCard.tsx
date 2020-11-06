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
}

const GameCard = ({ index, path }: Props) => {
  const router = useRouter()
  let currentPath = path

  if (router !== null) {
    currentPath = router.asPath
  }

  const par = true

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
        {par && (
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
              placeholder="Yards"
              min="1"
              max="1000"
              className={`${styles.inputWidth} stories-inputWidth mr-4 rounded`}
            />
            <input
              type="number"
              placeholder="Par"
              min="3"
              max="5"
              className={`${styles.inputWidth} stories-inputWidth mr-4 rounded`}
            />
          </>
        )}

        {currentPath === '/replay-game' && (
          <>
            <p className="mb-0 pb-0">
              <strong>Yards: </strong> 480
            </p>
            <p className="mb-0 pb-0">
              <strong>Par: </strong> 5
            </p>
          </>
        )}
        <input
          type="number"
          placeholder="Score"
          min="1"
          max="10"
          className={`${styles.inputWidth} stories-inputWidth mr-4 rounded`}
        />
      </div>
      <Button
        className={`${btnStyles.orange} stories-orange ${styles.btn} stories-btn mb-2`}
      >
        <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
        Save
      </Button>
    </Toast>
  )
}

export default GameCard
