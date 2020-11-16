import { useRouter } from 'next/router'
import useSWR from 'swr'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt'
import styles from '../styles/CourseHistory.module.css'
import { postFetcher } from '../utils/fetch'

type Props = {
  user: string
}

const CourseHistory = ({ user }: Props): JSX.Element => {
  const router = useRouter()

  const { data: gameHistory, error: gameHistoryErr } = useSWR(
    [`/api/user/game-history`, user],
    postFetcher
  )

  async function deleteTheRound(round) {
    const deleteGame = await postFetcher('/api/game/delete', round)

    if (deleteGame.status === 200) {
      router.push('/profile')
    }
  }

  if (gameHistoryErr)
    return (
      <div>
        Error loading game history, please contact support
        support@golfjournal.io
      </div>
    )
  return (
    <Container>
      <Row>
        {gameHistory !== undefined &&
          gameHistory.gameHistory.length > 0 &&
          gameHistory.gameHistory.map((game) => (
            <div
              className={`${styles.courseHistoryContainer} stories-courseHistoryContainer`}
              key={game.month}
            >
              <h2>
                <small>{game.month}</small>
              </h2>
              <Table striped bordered hover className="w-100">
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
                  {game.games.map((g, i) => (
                    <tr key={`${g.course}--${i}`}>
                      <td>{g.course}</td>
                      <td>{g.score}</td>
                      <td>{g.date}</td>
                      <td width="60">
                        <FontAwesomeIcon
                          type="button"
                          onClick={() => deleteTheRound(g.id)}
                          className="mx-auto d-block"
                          icon={faTrashAlt}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ))}
      </Row>
    </Container>
  )
}

export default CourseHistory
