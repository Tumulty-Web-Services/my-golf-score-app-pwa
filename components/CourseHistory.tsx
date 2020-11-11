import Table from 'react-bootstrap/Table'
import styles from '../styles/CourseHistory.module.css'

type Props = {
  month: string
  games: {
    course: string
    score: string
  }[]
}

const CourseHistory = ({ month, games }: Props): JSX.Element => {
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
          </tr>
        </thead>
        <tbody>
          {games.length > 0 &&
            games.map((game) => (
              <tr key={game.course}>
                <td>{game.course}</td>
                <td>{game.score}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default CourseHistory
