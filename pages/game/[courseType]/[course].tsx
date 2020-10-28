import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../../utils/auth0'
import SubTitle from '../../../components/SubTitle'
import ButtonLink from '../../../components/ButtonLink'
import UserInput from '../../../components/UserInput'
import styles from '../../../styles/Game.module.css'
import { makeTitle } from '../../../utils/helpers'
import { courseTypeToggles } from '../../../utils/toggleData'

type Props = {
  course: string,
  courseType: string
}
export default function Course({ course, courseType } : Props): JSX.Element {
  const [ holes, setHoles ] = useState([])
  const [ par, setPar ] = useState([])
  const [ score, setScore ] = useState([])
  const [ gameObj, setGameObj ] = useState([])

  function handleParInput(e) {
    return e
  }

  function handleScoreInput(e) {
    return e
  }

  useEffect(() => {
    const setGameLength = () => {
      let length

      if(courseType === "eighteen") {
        length = 18        
      }

      if(courseType === "nine") {
        length = 9
      }
      console.log()
      setHoles(Array.from(Array(length)).map((_, i) => i + 1))      
    }

    setGameLength()
  }, [courseType])
  

  return (
    <div className={styles.container}>
      <SubTitle title={`Course: ${course}`} />
      <SubTitle title={`Holes: ${courseType}`} />
      <div className={styles.game}>
        {holes.map((hole) => (
          <div key={hole} className={styles.gameItem}>
            <p><strong>Hole: </strong> {hole}</p>
            <div className={styles.gameItemInputs}>
              <UserInput
                type="number"
                placeHolder="Par"
                handleInput={handleParInput}
              />
              <UserInput
                type="number"
                placeHolder="Score"
                handleInput={handleScoreInput}
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
          course: makeTitle(params.course),
          courseType: params.courseType
        },
      }
    }
    return {
      props: {
        user: session.user,
        authed: true,
        score: '',
        course: makeTitle(params.course),
        courseType: params.courseType
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
