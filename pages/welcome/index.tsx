import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import FlexTable from '../../components/FlexTable'
import { yourCoursesData } from '../../utils/toggleData'

type Props = {
  user: string
}

export default function Welcome({ user }: Props): JSX.Element {
  if (user) {
    console.warn('well grab your data based on user id')
  }
  const formatTableItems = yourCoursesData.map((items) => {
    return {
      itemOne: items.course,
      itemTwo: items.score,
      itemThree: items.date
    }
  })

    // set up game
    useEffect(() => {
      // store user id in storage
      localStorage.setItem("user", JSON.stringify(user.nickname))

    }, [user])

  return (
    <div>
      <div className="card-container">
        <SubTitle title="Course History" />
        <FlexTable tableItems={formatTableItems} />
      </div>
      <div className="button-container">
        <ButtonLink label="New Course" link="/course-information" />
      </div>
      <div className="button-container">
        <ButtonLink label="Replay Course" link="/replay-course" />
      </div>
      <style jsx>{`
        .card-container {
          margin-bottom: 3em;
          display: block;
          margin-left: auto;
          margin-right: auto;
          max-width: 500px;
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
          user: session.user,
          authed: false,
        },
      }
    }
    return {
      props: {
        user: session.user,
        authed: true,
      },
    }
  }

  return {
    props: {
      user: session.user,
      authed: false,
    },
  }
}
