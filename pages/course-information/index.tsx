import React from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import Card from '../../layouts/Card'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import TextInput from '../../components/TextInput'
import RadioToggle from '../../components/RadioToggle'
import { courseTypeToggles } from '../../utils/toggleData'

export default function CourseInformation(): JSX.Element {
  function handleRadioInput(holes: string) {
    localStorage.setItem('userId', '')
    localStorage.setItem('courseType', holes)
  }

  function handleTextInput(course: string) {
    localStorage.setItem('course', course)
  }

  return (
    <div>
      <div className="card-container">
        <Card>
          <>
            <SubTitle title="Course Information" />
            <div className="input-container">
              <TextInput
                handleInput={handleTextInput}
                placeHolder="Enter course name"
              />
            </div>
            <SubTitle title="Course Type" />
            <div className="input-container">
              <RadioToggle
                handleInput={handleRadioInput}
                toggleValues={courseTypeToggles}
              />
            </div>
          </>
        </Card>
      </div>
      <div className="button-container">
        <ButtonLink label="Start Course" link="/holes/1/" />
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
