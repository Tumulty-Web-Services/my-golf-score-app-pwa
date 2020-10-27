import React from 'react'
import Card from '../../layouts/Card'
import ButtonLink from '../../components/ButtonLink'
import SubTitle from '../../components/SubTitle'
import DropDownSelection from '../../components/DropDownSelection'
import { yourCourseList } from '../../utils/dropDownData'

export default function ReplayCourse(): JSX.Element {
  return (
    <div>
      <div className="card-container">
        <Card>
          <SubTitle title="Course Information" />
          <div className="input-container">
            <DropDownSelection
              dropDownItems={yourCourseList}
              title="Select Course"
            />
          </div>
        </Card>
      </div>
      <div className="button-container">
        <ButtonLink label="Start Course" link="/holes/one" />
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
          margin-bottom: 2em;
        }
      `}</style>
    </div>
  )
}
