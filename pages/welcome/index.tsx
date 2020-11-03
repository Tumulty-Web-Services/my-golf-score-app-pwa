import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import FlexTable from '../../components/FlexTable'
import styles from '../../styles/FinishGame.module.css'
import { postFetcher, formatDate } from '../../utils/helpers'

type CourseInfo = {
  score: string
  date: string
  course: string
}

type Props = {
  user: string
  courseInformation: CourseInfo[]
}

export default function Welcome({
  user,
  courseInformation,
}: Props): JSX.Element {
  const formatTableItems = courseInformation.map((items) => {
    return {
      itemOne: items.course,
      itemTwo: items.score,
      itemThree: formatDate(items.gameDate),
    }
  })

  // set up game
  useEffect(() => {
    // todo: push anything into local storage into database
    // todo: clear local storage data except user id.

    const currentUser = localStorage.getItem('user')

    if(!currentUser) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  return (
    <div>
      <div className="card-container">
        <SubTitle title="Course History" />
        <div className={styles.tableTitle}>
        <p>
          <strong>Score | Date</strong>
        </p>
      </div>
      <div className={styles.flexContainer}>
        {(formatTableItems.length > 0 ) && <FlexTable tableItems={formatTableItems} />}
        {(formatTableItems.length <= 0) && <h3>Select <u>New Course</u> to start your first game</h3>}
      </div>
      <div className="button-container">
        <ButtonLink label="New Course" link="/course-information" />
      </div>
      <div className="button-container">
        <ButtonLink label="Replay Course" link="/replay-course" />
      </div>        
      </div>

      <style jsx>{`
        .card-container {
            margin-top: 10%;
            margin-bottom: 10%;   
            margin-left: auto;
            margin-right: auto;
            padding: 1em;        
            box-shadow: 0 8px 20px 0 rgb(0 0 0 / 8%);
            border: 3.5px solid #4A5915;
            border-radius: 2.5px;
            text-align: center;
            background: #fff;
        }

        .card-container > h3 {
          text-align: center;
          margin-top: 2em;
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
          user: session.user.nickname,
          authed: false,
          courseInformation: [],
        },
      }
    }

    // get the course Information
    const getCourseInformation = await postFetcher(
      `${process.env.BASE_URL}/api/get-user-course-history`,
      JSON.stringify({ nickname: session.user.nickname })
    )

    return {
      props: {
        user: session.user.nickname,
        authed: true,
        courseInformation: getCourseInformation.response,
      },
    }
  }

  return {
    props: {
      user: null,
      authed: false,
      courseInformation: [],
    },
  }
}
