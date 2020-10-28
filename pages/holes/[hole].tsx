import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import Card from '../../layouts/Card'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import RadioToggle from '../../components/RadioToggle'
import { parToggles } from '../../utils/toggleData'

type Props = {
  hole: string
}

export default function Holes({ hole }: Props): JSX.Element {
  const [par, setPar] = useState('3')
  function handleInput(inputPar) {
    setPar(inputPar)
  }
  return (
    <div>
      <div className="card-container">
        <Card>
          <>
            <SubTitle title={`Hole ${hole}`} />
            <SubTitle title="Par" />
            <div className="input-container">
              <RadioToggle
                handleInput={handleInput}
                toggleValues={parToggles}
              />
            </div>
          </>
        </Card>
      </div>
      <div className="button-container">
        <ButtonLink label="Your Score" link={`/your-score/${par}/${hole}`} />
      </div>

      <style jsx>{`
        .card-container {
          margin-bottom: 3em;
        }

        .button-container {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 20px;
          max-width: 400px;
        }

        .input-container {
          text-align: center;
          width: 100%;
          margin-bottom: 2em;
        }
      `}</style>
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
          hole: params.hole,
        },
      }
    }
    return {
      props: {
        user: session.user,
        authed: true,
        hole: params.hole,
      },
    }
  }

  return {
    props: {
      user: '',
      authed: false,
      hole: params.hole,
    },
  }
}
