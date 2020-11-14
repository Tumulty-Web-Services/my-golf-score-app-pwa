import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import CardInput from './CardInput'

export default function Subscription() {
  const [subscription, setSubscription] = useState('tier one')
  return (
    <>
      <Form.Group controlId="subscription">
        <Form.Text className="text-muted text-left">
          Select subscription options
        </Form.Text>
        <Form.Control
          className="mt-1"
          value={subscription}
          onChange={(e) => setSubscription(e.target.value)}
          as="select"
        >
          <option value="tier one">Free - 4 games per month</option>
          <option value="tier two">$.99 - 8 games per month</option>
          <option value="tier three">$3.99 - 12 games per month</option>
          <option value="tier four">$6.99 - Unlimited games</option>
        </Form.Control>
      </Form.Group>
      {subscription !== 'tier one' && <CardInput />}
    </>
  )
}
