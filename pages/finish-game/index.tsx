import React from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import FlexTable from '../../components/FlexTable'
import styles from '../../styles/FinishGame.module.css'
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
    <div className={styles.container}>
       <SubTitle title="Your Score: 116" />
       <div className={styles.tableTitle}>
         <p><strong>Score | Par</strong></p>
       </div>
       <div className={styles.flexContainer}>
         <FlexTable tableItems={formatTableItems} />
       </div>             
      <div className={styles.buttonContainer}>
        <ButtonLink label="Finish Course" link="/welcome" />
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
