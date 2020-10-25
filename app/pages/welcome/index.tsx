import React from 'react'
import Card from '../../layouts/Card'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'

export default function Welcome(): JSX.Element {
  return (
    <>
      <Card>
        <>
          <SubTitle title="Course History" />
        </>
      </Card>
      <ButtonLink label="NEW COURSE" link="/course-information" />
      <ButtonLink label="REPLAY COURSE" link="/replay-course" />
    </>
  )
}
