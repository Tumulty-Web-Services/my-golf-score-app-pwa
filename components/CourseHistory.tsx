import { useRouter } from 'next/router'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt'
import styles from '../styles/CourseHistory.module.css'
import { postFetcher } from '../utils/fetch'

type Props = {
  month: string
  games: {
    id: string
    course: string
    score: string
    date: string
  }[]
}

const CourseHistory = ({ month, games }: Props): JSX.Element => {
  const router = useRouter()

  async function deleteTheRound(round) {
    const deleteGame = await postFetcher('/api/game/delete', round)

    if (deleteGame.status === 200) {
      router.push('/profile')
    }
  }

  return (
    <div
      className={`${styles.courseHistoryContainer} stories-courseHistoryContainer`}
    >
      <h2>
        <small>{month}</small>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Score</th>
            <th>Date</th>
            <th>
              <small className="text-center mx-auto d-block">
                Delete Round
              </small>
            </th>
          </tr>
        </thead>
        <tbody>
          {games.length > 0 &&
            games.map((game, index) => (
              <tr key={`${game.course}--${index}`}>
                <td>{game.course}</td>
                <td>{game.score}</td>
                <td>{game.date}</td>
                <td width="60">
                  <FontAwesomeIcon
                    type="button"
                    onClick={() => deleteTheRound(game.id)}
                    className="mx-auto d-block"
                    icon={faTrashAlt}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default CourseHistory
