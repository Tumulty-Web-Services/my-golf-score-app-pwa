import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle'
import SubTitle from '../../components/SubTitle'
import ButtonLink from '../../components/ButtonLink'
import GameInput from '../../components/GameInput'
import styles from '../../styles/Game.module.css'
import { makeTitle, postFetcher } from '../../utils/helpers'

type Props = {
  course: string
  courseType: string
  courseData: {
    hole: string
    par: string
  }
}

export default function ReplayCourse({ course, courseType, courseData }: Props): JSX.Element {
  const [currentHole, setCurrentHole] = useState('')
  const [currentPar, setCurrentPar] = useState('')
  const [currentScore, setCurrentScore] = useState('')
  const [gameObj, setGameObj] = useState([])

  function handleScoreInput(game) {
    const { input, hole } = game

    // access the parent element to retrieve the current par
    const currentInputElm = document.getElementById(`hole-${hole}`)
    const currentElmPar =  currentInputElm.parentElement.getAttribute('data-par')

    setCurrentPar(currentElmPar)
    setCurrentHole(hole)
    setCurrentScore(input)
  }

  function storeGameData() {
    const newHole = {
      hole: currentHole,
      par: currentPar,
      score: currentScore,
    }

    // replace value if already exists
    const removeOldHole = gameObj.filter((obj) => {
      if (obj.hole !== currentHole) {
        return obj
      }
    })

    setGameObj([...removeOldHole, newHole])
  }

  function saveGameState() {
    localStorage.setItem('holes', JSON.stringify(gameObj))
  }

  // set up game
  useEffect(() => {
    
    if (currentScore) {
      storeGameData()
    }

    localStorage.setItem('courseType', JSON.stringify(courseType))
    localStorage.setItem('course', JSON.stringify(course))
  }, [courseType, currentScore, course])

  return (
    <div className={styles.container}>
      <SubTitle title={`Course: ${course}`} />
      <p>
        <small>Click the plus button to save data for each hole.</small>
      </p>
      <div className={styles.game}>
        {courseData.map((data) => (
          <div key={data.hole} className={styles.gameItem}>
            <p>
              <strong>Hole: </strong> {data.hole}
            </p>
            <div className={styles.gameItemInputs} data-par={data.par}>
              <p className={styles.parStyle}><strong>Par: {data.par}</strong></p>
              <GameInput
                type="number"
                placeHolder="Score"
                handleInput={handleScoreInput}
                hole={data.hole}
                source="Score"
              />

              <FontAwesomeIcon
                type="button"
                className={styles.saveGameButton}
                icon={faPlusCircle}
                onClick={saveGameState}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <ButtonLink label="Finish Game" link="/finish-game" />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res, params } = context
  const course = params.slug

  const getTheCourseHoles = await postFetcher(`
    ${process.env.BASE_URL}/api/get-course-holes`,
    JSON.stringify({course: course})
  )

  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req)
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/login',
      })
      res.end()

      return {
        props: {
          user: '',
          authed: false,
          courseData: [],
          course: makeTitle(course),
        },
      }
    }

    return {
      props: {
        user: session.user,
        authed: true,
        courseData: getTheCourseHoles.course,
        courseType: getTheCourseHoles.courseType,
        course: makeTitle(course)
      },
    }
  }

  return {
    props: {
      user: '',
      authed: false,
      courseData: [],
      course: makeTitle(course)
    },
  }
}
