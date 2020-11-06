import Button from 'react-bootstrap/Button'
import styles from '../styles/CourseHistory.module.css'
import btnStyles from '../styles/SuccessBtn.module.css'

const CourseLabel = () => {
  return (
    <div className={`${styles.courseHistoryContainer} ${styles.sticky}`}>
      <h2>
        <small>Course</small>
      </h2>
      <hr />
      <div className={styles.courseLabel}>
        <p className={`${styles.strong} mb-0`}>Bunker Hill</p>
        <p className="mb-3 mt-0 pt-0">
          <small>18 Holes</small>
        </p>
        <Button
          size="lg"
          className={`w-100 mt-4 ${btnStyles.teal}`}
          href="/finish"
        >
          Finish game
        </Button>
      </div>
    </div>
  )
}

export default CourseLabel
