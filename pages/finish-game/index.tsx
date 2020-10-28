import React from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import Card from '../../layouts/Card'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import FlexTable from '../../components/FlexTable'
import { finishedCourse } from '../../utils/toggleData'

export default function FinishGame(): JSX.Element {
  const formatTableItems = finishedCourse.map((items) => {
    return {
      itemOne: items.hole,
      itemTwo: items.par,
      itemThree: items.score,
    }
  })

  return (
    <div>
      <div className="card-container">
        <Card>
          <>
            <SubTitle title="Course Finished" />
            <SubTitle title="Your Score: 116" />
            <div className="table-title">
              <p>
                <strong>Score | Par</strong>
              </p>
            </div>
            <div className="flex-container">
              <FlexTable tableItems={formatTableItems} />
            </div>
          </>
        </Card>
      </div>
      <div className="button-container">
        <ButtonLink label="Finish Course" link="/welcome" />
      </div>
      <style jsx>{`
        .card-container {
          margin-bottom: 3em;
        }

        .flex-container {
          padding-bottom: 12px;
        }

        .button-container {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 20px;
        }

        .table-title {
          display: flex;
          width: 100%;
          justify-content: flex-end;
        }

        .button-container,
        .table-title {
          max-width: 400px;
        }
      `}</style>
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
