import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import SubTitle from '../../components/SubTitle'
import FlexTable from '../../components/FlexTable'
import styles from '../../styles/FinishGame.module.css'
import btnStyles from '../../styles/Button.module.css'

export default function FinishGame(): JSX.Element {
  const [finalGame, setFinalGame ] = useState([])
  const [gameStats, setGameStats] = useState([])

  const formatTableItems = gameStats.map((items) => {
    return {
      itemOne: items.hole,
      itemTwo: items.par,
      itemThree: items.score,
    }
  })


  function storeGameInCloud() {
    console.log(finalGame)
  }

  // set up game
  useEffect(() => {
    // store user id in storage
    const getUser = localStorage.getItem("user");
    const getCourse = localStorage.getItem("course")
    const getCourseType = localStorage.getItem("courseType")
    const getHoles = localStorage.getItem("holes")

    const finalGameData: any = {
      nickname: getUser,
      game: {
        course: getCourse,
        courseType: getCourseType,
        date: new Date(),
        holes: JSON.parse(getHoles)
      }      
    }

    setFinalGame(finalGameData)
    setGameStats([...JSON.parse(getHoles)])

  }, [])

  return (
    <div className={styles.container}>
       <SubTitle title="Your Score: 116" />
       <div className={styles.tableTitle}>
         <p><strong>Score | Par</strong></p>
       </div>
       <div className={styles.flexContainer}>
         <FlexTable tableItems={formatTableItems} />
       </div>             
      <div className={styles.buttonContainer}>
        <button
          type="butotn"
          onClick={storeGameInCloud}
          className={`${btnStyles.button} stories-btn`}>
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
