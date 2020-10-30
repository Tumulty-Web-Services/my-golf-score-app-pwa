import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import TextInput from '../../components/UserInput'
import RadioTable from '../../components/RadioTable'
import { yourCoursesData } from '../../utils/toggleData'
import { urlify } from '../../utils/helpers'
import styles from '../../styles/ReplayCourse.module.css'

export default function ReplayCourse(): JSX.Element {
  const [course, setCourse] = useState(urlify('Rutgers University Course'))

  function handleTextInput(e) {
    setCourse(urlify(e))
  }

  function handleRadioInput(e) {
    setCourse(urlify(e))
  }

  const formatTableData = yourCoursesData.map((item) => {
    return {
      id: item.id,
      text: item.course,
      label: item.course,
      name: 'course',
    }
  })

  return (
    <div>
      <div className={styles.container}>
        <SubTitle title="Select Course" />
        <div className={styles.textContainer}>
          <TextInput
            type="text"
            handleInput={handleTextInput}
            placeHolder="Search for other course"
          />
        </div>
        <div className={styles.inputContainer}>
          <RadioTable
            handleInput={handleRadioInput}
            toggleValues={formatTableData}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <ButtonLink label="Start Course" link={`/game/eighteen/${course}`} />
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
      },
    }
  }

  return {
    props: {
      user: '',
      authed: false,
    },
  }
}
