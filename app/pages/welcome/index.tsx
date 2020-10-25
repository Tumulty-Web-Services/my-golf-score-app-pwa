import React from 'react'
import Card from '../../layouts/Card'
import ButtonLink from '../../components/ButtonLink'

export default function Welcome(): JSX.Element {
  return (
    <>
      <Card>
        <p>User info will go here..</p>
      </Card>
      <ButtonLink label="NEW COURSE" link="/course-information" />
      <ButtonLink label="REPLAY COURSE" link="/replay-course" />
    </>
  )
}
