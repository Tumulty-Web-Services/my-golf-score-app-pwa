import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import SubTitle from '../../components/SubTitle'
import FlexTable from '../../components/FlexTable'
import styles from '../../styles/FinishGame.module.css'
import btnStyles from '../../styles/Button.module.css'
import { postFetcher } from '../../utils/helpers'

export default function FinishGame(): JSX.Element {
  const router = useRouter()
  const [finalGame, setFinalGame] = useState([])
  const [gameStats, setGameStats] = useState([])
  const [finalGameScore, setFinalGameScore] = useState(0)
  const [course, setCourse] = useState('')

  const formatTableItems = gameStats.map((items) => {
    return {
      itemOne: items.hole,
      itemTwo: items.par,
      itemThree: items.score,
    }
  })

  function calculateFinalScore(scores) {
    let results = 0
    const extractedScores = scores.map((hole) => hole.score)

    extractedScores.forEach((score) => {
      const sc = parseInt(score)
      results += sc
    })

    setFinalGameScore(results)
    return results
  }

  async function storeGameInCloud() {
    const saveFinishedGame = await postFetcher(
      '/api/save-game',
      JSON.stringify({ finalGame })
    )

    if (saveFinishedGame.status === 201) {
      router.push('/welcome')
    } else {
      console.error(saveFinishedGame)
      const message = `
        There was an issue please email support@golfjournal.io
      `
      alert(message)
    }
  }

  // set up game
  useEffect(() => {
    // store user id in storage
    const getUser = localStorage.getItem('user')
    const getCourse = localStorage.getItem('course')
    const getCourseType = localStorage.getItem('courseType')
    const getHoles = localStorage.getItem('holes')
    const finalScore = calculateFinalScore(JSON.parse(getHoles))

    const finalGameData: any = {
      nickname: getUser,
      game: {
        course: getCourse,
        courseType: getCourseType,
        gameDate: new Date(),
        finalScore: finalScore,
        holes: JSON.parse(getHoles),
      },
    }

    setCourse(getCourse)
    calculateFinalScore(JSON.parse(getHoles))
    setFinalGame(finalGameData)
    setGameStats([...JSON.parse(getHoles)])
  }, [])

  return (
    <div className={styles.container}>
      <SubTitle title={course} />
      <SubTitle title={`Score: ${finalGameScore.toString()}`} />
      <div className={styles.tableTitle}>
        <p>
          <strong>Score | Par</strong>
        </p>
      </div>
      <div className={styles.flexContainer}>
        <FlexTable tableItems={formatTableItems} />
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={storeGameInCloud}
          className={`${btnStyles.button} stories-btn`}
        >
          Finish Course
        </button>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context

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
        },
      }
    }
    return {
      props: {
        user: session.user,
        authed: true,
        score: '',
      },
    }
  }

  return {
    props: {
      user: '',
      authed: false,
      score: '',
    },
  }
}
