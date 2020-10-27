import React from 'react'
import Card from '../../layouts/Card'
import SubTitle from '../../components/SubTitle'
import ButtonLink from '../../components/ButtonLink'
import RadioTable from '../../components/RadioTable'
import { yourScoreData } from '../../utils/toggleData'

export default function YourScore(): JSX.Element {
  return (
    <div>
      <div className="card-container">
        <Card>
          <>
            <SubTitle title="Hole Two: Par 5" />
            <SubTitle title="Your Score" />
            <RadioTable toggleValues={yourScoreData} />
          </>
        </Card>
      </div>
      <div className="button-container">
        <ButtonLink label="Next Hole" link="/holes/3" />
      </div>
      <div className="button-container">
        <ButtonLink label="Previous Hole" link="/holes/1" />
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
