import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import AutoCompleteInput from '../../components/AutoCompleteInput'
import RadioTable from '../../components/RadioTable'
import { urlify, postFetcher } from '../../utils/helpers'
import styles from '../../styles/ReplayCourse.module.css'

type CourseInfo = {
  score: string
  date: string
  course: string
}

type Props = {
  courseInformation: CourseInfo[]
}

export default function ReplayCourse({ courseInformation }: Props): JSX.Element {
  const [course, setCourse] = useState(urlify(courseInformation[0].course))
  const [searchTerm, setSearchTerm ] = useState('')

  const formatTableData = courseInformation.map((item, index) => {
    return {
      id: `${item.course}-${item.gameDate}-${index}`,
      text: item.course,
      label: item.course,
      name: 'course',
    }
  })

  const formatSearchData = courseInformation.map((item) => {
    return {
      label: item.course
    }
  })

  console.log('searchTerm');
  console.log(searchTerm)

  return (
    <div>
      <div className={styles.container}>
        <SubTitle title="Select Course" />
        <div className={styles.textContainer}>
          <AutoCompleteInput
            items={formatSearchData}
            value={searchTerm}
            handleInput={(term) => {
              setCourse(urlify(term))
              setSearchTerm(term)
            }}
          />
        </div>
        <div className={styles.inputContainer}>
          <RadioTable
            handleInput={(term) => {
              setCourse(urlify(term))
            }}
            toggleValues={formatTableData}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <ButtonLink label="Start Course" link={`/replay-game/${course}`} />
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
          courseInformation: []
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
        user: session.user,
        authed: true,
        courseInformation: getCourseInformation.response
      },
    }
  }

  return {
    props: {
      user: '',
      authed: false,
      courseInformation: []
    },
  }
}
