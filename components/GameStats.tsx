import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import styles from '../styles/CourseHistory.module.css'

type Props = {
  index: string
}

const GameStats = ({ index }: Props): JSX.Element => {
  const eighteenHoles = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
  ]
  const nineHoles = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let mapholes
  if (index === '18') {
    mapholes = eighteenHoles
  }
  if (index === '9') {
    mapholes = nineHoles
  }
  return (
    <div className={styles.courseHistoryContainer}>
      <div className="d-block w-100">
        <h2>
          <small className="d-block">Bunker Hill</small>
        </h2>
      </div>
      <div className="d-flex justify-content-between">
        <h2>
          <small className="d-block">Final Stats</small>
          <small className="d-block">Score: {6 * 18}</small>
        </h2>
        <Button variant="outline-dark" sz="sm" className="mb-3" href="/welcome">
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
          {mapholes.map((hole) => (
            <tr key={hole}>
              <td>{hole}</td>
              <td>300</td>
              <td>4</td>
              <td>6</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="outline-dark" className="w-100 mb-3" href="/welcome">
        Home
      </Button>
    </div>
  )
}

export default GameStats
