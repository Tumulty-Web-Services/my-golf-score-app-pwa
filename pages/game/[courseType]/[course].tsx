import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../../utils/auth0'
import SubTitle from '../../../components/SubTitle'
import ButtonLink from '../../../components/ButtonLink'
import GameInput from '../../../components/GameInput'
import styles from '../../../styles/Game.module.css'
import { makeTitle } from '../../../utils/helpers'

type Props = {
  course: string,
  courseType: string
}
export default function Course({ course, courseType } : Props): JSX.Element {
  const [ holes, setHoles ] = useState([])
  const [ currentHole, setCurrentHole ] = useState('')
  const [ currentPar, setCurrentPar ] = useState('')
  const [ currentScore, setCurrentScore ] = useState('')
  const [ gameObj, setGameObj ] = useState([])

  function handleParInput(game) {
    const { hole, input } = game
    setCurrentHole(hole)
    setCurrentPar(input)
  }

  function handleScoreInput(game) {
    const { input } = game
    setCurrentScore(input)
  }

  function storeGameData() {
    const newHole = {
      hole: currentHole,
      par: currentPar,
      score: currentScore
    }

    setGameObj(gameOb => [...gameObj, newHole])  
   
  }
 


  // set up game
  useEffect(() => {
    const setGameLength = () => {
      let length

      if(courseType === "eighteen") {
        length = 18        
      }

      if(courseType === "nine") {
        length = 9
      }

      setHoles(Array.from(Array(length)).map((_, i) => i + 1))      
    }   
    
    if(currentScore) {
      storeGameData()
    }

    // todo: figure out how to store latest game object into local storage
    setGameLength()
  }, [courseType, currentScore, gameObj])
  

  return (
    <div className={styles.container}>
      <SubTitle title={`Course: ${course}`} />
      <SubTitle title={`Holes: ${courseType}`} />
      {currentHole}
      <div className={styles.game}>
        {holes.map((hole) => (
          <div key={hole} className={styles.gameItem}>
            <p><strong>Hole: </strong> {hole}</p>
            <div className={styles.gameItemInputs}>
              <GameInput
                type="number"
                placeHolder="Par"
                handleInput={handleParInput}
                hole={hole}
                source="Par"
              />
              <GameInput
                type="number"
                placeHolder="Score"
                handleInput={handleScoreInput}
                hole={hole}
                source="Score"
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
