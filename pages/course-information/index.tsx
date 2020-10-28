import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import TextInput from '../../components/UserInput'
import RadioToggle from '../../components/RadioToggle'
import { courseTypeToggles } from '../../utils/toggleData'
import { urlify } from '../../utils/helpers'
import styles from '../../styles/CourseInfo.module.css'

export default function CourseInformation(): JSX.Element {
  const [ course, setCourse ] = useState('')
  const [ courseType, setCourseType ] = useState('nine')

  function handleInput(e) {
    setCourse(urlify(e))
  }

  return (
    <div className={styles.container}>
      <SubTitle title="Course Information" />
      <TextInput type="text" placeHolder="Enter course name" handleInput={handleInput} />
      <div className={styles.radioInput}>
        <SubTitle title="Course Type" />
        <RadioToggle toggleValues={courseTypeToggles} handleInput={setCourseType} />
      </div>
      <div className={styles.buttonContainer}>
        <ButtonLink label="Start Course" link={`/game/${courseType}/${course}`} />
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
