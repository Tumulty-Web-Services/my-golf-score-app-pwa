import React from 'react'
import Card from '../../layouts/Card'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import RadioToggle from '../../components/RadioToggle'
import { parToggles } from '../../utils/toggleData'

export default function ReplayHoles() {
  return (
    <div>
      <div className="card-container">
        <Card>
          <>
            <SubTitle title="Hole One" />
            <SubTitle title="Par" />
            <div className="input-container">
              <RadioToggle toggleValues={parToggles} />
            </div>
          </>
        </Card>
      </div>
      <div className="button-container">
        <ButtonLink label="Your Score" link="/your-score/two" />
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

        .input-container {
          text-align: center;
          width: 100%;
          margin-bottom: 2em;
        }
      `}</style>
    </div>
  )
}
