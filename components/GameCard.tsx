import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle'
import styles from '../styles/GameCard.module.css'
import btnStyles from '../styles/SuccessBtn.module.css'

type Props = {
  index: string
}

const GameCard = ({ index }: Props) => {
  return (
    <Toast className={`${styles.mw100} mw-75 mb-4 p-3 d-flex flex-column`}>
      <h4>
        <Badge variant="secondary">{index}</Badge>
      </h4>
      <div className="input-container mt-2 mb-3">
        <input
          type="number"
          placeholder="Yards"
          className={`${styles.inputWidth} mr-4 rounded`}
        />
        <input
          type="number"
          placeholder="Par"
          className={`${styles.inputWidth} mr-4 rounded`}
        />
        <input
          type="number"
          placeholder="Score"
          className={`${styles.inputWidth} mr-4 rounded`}
        />
      </div>
      <Button className={`${btnStyles.orange} ${styles.btn} mb-2`}>
        <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
        Save
      </Button>
    </Toast>
  )
}

export default GameCard
