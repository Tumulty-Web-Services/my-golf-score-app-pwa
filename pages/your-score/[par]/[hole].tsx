import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import auth0 from '../../../utils/auth0'
import Card from '../../../layouts/Card'
import SubTitle from '../../../components/SubTitle'
import ButtonLink from '../../../components/ButtonLink'
import RadioTable from '../../../components/RadioTable'
import { yourScoreData } from '../../../utils/toggleData'
import { holeProgression, checkForGoodScore, urlify } from '../../../utils/helpers'
import { setRoundObject } from '../../../utils/game'

type Props = {
  hole: string
  par: string
}

export default function YourScore({ hole, par }: Props): JSX.Element {
  const [ score, setScore ] = useState('')
  const router = useRouter()
  const nextHole = holeProgression(parseInt(hole), 'next')
  const prevHole = holeProgression(parseInt(hole), 'previous')
  
  function handleInput(input: string) {
    const numPar = parseInt(par)
    const numInput = parseInt(input)

    // redirect to congratulations page
    if(numInput <= numPar) {
      const congratulations = checkForGoodScore(numPar, numInput)

      if(congratulations) {
        return router.push({
          pathname: '/congratulations/[term]/[par]/[hole]',
          query: {
            term: urlify(congratulations),
            par: par,
            hole: hole
          },
        })
      }
    }  

    // redirect to finish game page if currentHole === hole
    const getCurrentHole = localStorage.getItem('currentHole')
    const getCourseType = localStorage.getItem('courseType')
    
    if(getCurrentHole === getCourseType) {
      return router.push('/finished-game')
    }
    setScore(input)
  }


  useEffect(() => {
    const setLocalStorageGameData = async () => {
      console.log('trigger on load!')
      await setRoundObject(par, hole)
      await localStorage.setItem('currentHole', hole)   
    }

    setLocalStorageGameData()    
  }, [])
  
  
  return (
    <div>
      <div className="card-container">
        <Card>
          <>
            <SubTitle title={`Hole ${hole}  Par ${par}`} />
            <SubTitle title="Your Score" />
            <div className="flex-container">
              <RadioTable handleInput={handleInput} toggleValues={yourScoreData} />
            </div>
          </>
        </Card>
      </div>
      <div className="button-container">
        <ButtonLink label="Next Hole" link={`/holes/${nextHole}`} />
      </div>
      <div className="button-container">
        <ButtonLink label="Previous Hole" link={`/holes/${prevHole}`} />
      </div>
      <style jsx>{`
        .card-container {
          margin-top: 6em;
          margin-bottom: 3em;
        }

        .flex-container {
          margin-left: auto;
          margin-right: auto;
          min-width: 100%;
        }

        .button-container {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 20px;
          max-width: 400px;
        }
      `}</style>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res, params } = context
  const { hole, par } = params

  // update localStorage with latest hole data
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
          hole,
          par,
        },
      }
    }
    return {
      props: {
        user: session.user,
        authed: true,
        hole,
        par,
      },
    }
  }

  return {
    props: {
      user: '',
      authed: false,
      hole,
      par,
    },
  }
}
