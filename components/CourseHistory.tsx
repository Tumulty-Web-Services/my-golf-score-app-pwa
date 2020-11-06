import Table from 'react-bootstrap/Table'
import styles from '../styles/CourseHistory.module.css'

type Props = {
  month: string
}

const CourseHistory = ({ month }: Props): JSX.Element => {
  return (
    <div
      className={`${styles.courseHistoryContainer} stories-courseHistoryContainer`}
    >
      <h2>
        <small>{month} 2020</small>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bunker Hill</td>
            <td>98</td>
          </tr>
          <tr>
            <td>Forge Pond</td>
            <td>112</td>
          </tr>
          <tr>
            <td>Rutgers University Course</td>
            <td>104</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default CourseHistory
