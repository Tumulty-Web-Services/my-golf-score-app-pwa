import React from 'react'
import Card from '../../layouts/Card'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import FlexTable from '../../components/FlexTable'
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
    <div>
      <div className="card-container">
        <Card>
          <>
            <SubTitle title="Course Finished" />
            <SubTitle title="Your Score: 116" />
            <FlexTable tableItems={formatTableItems} />
          </>
        </Card>
      </div>
      <div className="button-container">
        <ButtonLink label="Finish Course" link="/welcome" />
      </div>
      <style jsx>{`
        .card-container {
          margin-top: 6em;
          margin-bottom: 3em;
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
