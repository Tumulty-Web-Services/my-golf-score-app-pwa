import React from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import Card from '../../layouts/Card'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import TextInput from '../../components/TextInput'
import RadioTable from '../../components/RadioTable'
import { yourCoursesData } from '../../utils/toggleData'

export default function ReplayCourse(): JSX.Element {
  const formatTableData = yourCoursesData.map((item) => {
    return {
      id: item.id,
      text: item.course,
      label: item.course,
      name: 'course',
    }
  })

  function handleRadioInput(e) {
    return e
  }

  function handleTextInput(e) {
    return e
  }
  return (
    <div>
      <div className="card-container">
        <Card>
          <SubTitle title="Select Course" />
          <div className="input-container mt-20px">
            <TextInput
              handleInput={handleTextInput}
              placeHolder="Search for other course"
            />
          </div>
          <div className="input-container">
            <RadioTable
              handleInput={handleRadioInput}
              toggleValues={formatTableData}
            />
          </div>
        </Card>
      </div>
      <div className="button-container">
        <ButtonLink label="Start Course" link="/holes/1" />
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
          margin-bottom: 2em;
          text-align: center;
        }

        .mt-20px {
          margin-top: 20px;
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
