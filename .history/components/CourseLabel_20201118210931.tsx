import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import styles from '../styles/CourseHistory.module.css'
import btnStyles from '../styles/BtnStyles.module.css'
import { postFetcher } from '../utils/fetch'

type Props = {
  course: string
  length: string
  totalScore: number
  user: string
}

const CourseLabel = ({ course, length, totalScore, user }: Props) => {
  const router = useRouter()

  async function finishGame() {
    localStorage.setItem('course', course)
    localStorage.setItem('totalScore', totalScore.toString())

    const rounds = JSON.parse(localStorage.getItem('rounds'))

    // push data to database
    const completedGame = {
      user: user,
      course: course,
      totalScore: totalScore,
      rounds: rounds,
    }

    const saveGame = await postFetcher('/api/game/save', completedGame)

    if (saveGame.status === 200) {
      router.push('/finish')
    } else {
      alert(
        'There was an error saving your game, please contact support@golfjournal.io'
      )
    }
  }

  return (
    <div
      className={`${styles.courseHistoryContainer} ${styles.sticky} stories-courseHistoryContainer stories-sticky`}
    >
      <h2>
        <small>Course</small>
      </h2>
      <hr />
      <div className={`${styles.courseLabel} stories-courseLabel`}>
        <p className={`${styles.strong} stories-strong mb-0`}>{course}</p>
        <p className="py-0 my-0">
          {length === 'nine' && (
            <small>
              {' '}
              Holes: <strong>9</strong>
            </small>
          )}
          {length === 'eighteen' && (
            <small>
              {' '}
              Holes: <strong>18</strong>
            </small>
          )}
        </p>
        <p className="mb-3 mt-0 pt-0">
          <small>
            Score: <strong>{totalScore.toString()}</strong>
          </small>
        </p>
        <Button
          size="lg"
          className={`w-100 my-4 ${btnStyles.teal} stories-teal`}
          onClick={() => finishGame()}
        >
          Finish game
        </Button>
      </div>
    </div>
  )
}

export default CourseLabel
