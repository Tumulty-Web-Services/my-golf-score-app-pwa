import React from 'react'
import Card from '../layouts/Card'
import SubTitle from '../components/SubTitle'
import './Card.css'

export default { title: 'Card' }

export const SiteCard = () => (
  <Card>
    <>
      <SubTitle title="Course History" />
      <div className="flex-table">
        <div>Rutgers University Cousre</div>
        <div>98</div>
      </div>
      <div className="flex-table">
        <div>Bunker Hill</div>
        <div>110</div>
      </div>
      <div className="flex-table">
        <div>Tamarack</div>
        <div>113</div>
      </div>
      <div className="flex-table">
        <div>Mattawant Golf Club</div>
        <div>116</div>
      </div>
      <div className="flex-table">
        <div>Hillsborough Country Club</div>
        <div>100</div>
      </div>
      <div className="flex-table">
        <div>Hominy Hill</div>
        <div>112</div>
      </div>
      <div className="flex-table">
        <div>Forge Pond</div>
        <div>98</div>
      </div>
      <div className="flex-table">
        <div>Shark River Course</div>
        <div>102</div>
      </div>
      <div className="flex-table">
        <div>Hole One</div>
        <div>4 | 5</div>
      </div>
      <div className="flex-table">
        <div>Hole Two</div>
        <div>3 | 3</div>
      </div>
    </>
  </Card>
)
