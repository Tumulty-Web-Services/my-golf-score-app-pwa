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


  // build the game object
  function handleInput(game) {
    // extract each key/value pair
    const { source, hole, input} = game
    setCurrentHole(hole)   

    if(source === "Par") {
      console.log('par is getting hit!')
      setCurrentPar(input)
    }

    if(source === "Score") {

      // set a local storage save
      setCurrentScore(input)
    }

    const holeData = {
      hole: currentHole,
      par: currentPar,
      score: currentScore
    }

    console.table(currentHole, currentPar, currentScore)

    if(gameObj.length < 1) {
      console.log('%c holeData', 'color: orange; font-size:32px;')
      console.log(holeData)
      setGameObj([holeData])
    }

    if(gameObj.length < 1) {
      console.log('%c holeData', 'color: orange; font-size:32px;')
      console.log(holeData)
      setGameObj(gameObj => [...gameObj, holeData])
    }
    
    console.table(gameObj)
    
    return game
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


    const getGameData = () => {
      console.log('%c Game state', 'color: green; font-size: 22px')
    }

    setGameLength()
    getGameData()
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
              <GameInput
                type="number"
                placeHolder="Par"
                handleInput={handleInput}
                hole={hole}
                source="Par"
              />
              <GameInput
                type="number"
                placeHolder="Score"
                handleInput={handleInput}
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
