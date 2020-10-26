import React from 'react'
import Card from '../../layouts/Card'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import RadioToggle from '../../components/RadioToggle'
import DropDownSelection from '../../components/DropDownSelection'
import { parToggles } from '../../utils/toggleData'
import { yourScore } from '../../utils/dropDownData'


export default function Holes() {
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
          <div className="input-container">
            <DropDownSelection dropDownItems={yourScore} title="Your score" />
          </div>
        </>
      </Card>
    </div>
    <div className="button-container">
      <ButtonLink label="Next Hole" link="/holes/two" />
    </div>
    <div className="button-container">
      <ButtonLink label="Previous Hole" link="/holes/one" />
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
