import React, { useState } from 'react'
import Head from 'next/head'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CardInput from '../../components/CardInput'
import btnStyles from '../../styles/BtnStyles.module.css'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'
import { postPaymentFetcher } from '../../utils/fetch'

export default function SignUp(): JSX.Element {
  const stripe = useStripe()
  const elements = useElements()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [subscription, setSubscription] = useState('tier one')
  const [paymentStatus, setPaymentStatus] = useState(false)

  // handle create auth0 account
  async function auth0Handler() {
    const nickname = email.substring(0, email.lastIndexOf('@'))
    const newUser = {
      name,
      nickname,
      email,
      password,
    }
    /* eslint-disable */
    const webAuth = new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
    })

    webAuth.signup(
      {
        connection: process.env.AUTH0_DB_CONNECTION,
        ...newUser,
      },
      function (err) {
        if (err) return alert('Something went wrong: ' + err.message)
        return alert('success signup without login!')
      }
    )
  }

  // handle stripe payments
  async function handlePayment() {
    if (!stripe || !elements) {
      return
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: email,
      },
    })

    const handlePayment = await postPaymentFetcher('/api/checkout/cart', result)

    if (handlePayment) {
      setPaymentStatus(true)
    }

    return true
  }

  async function handleSubmission() {
    await handlePayment()

    if (paymentStatus) {
      await auth0Handler()
    }

    return true
  }

  return (
    <Container>
      <Head>
        <title>GolfJournal.io - Sign up</title>
        <meta
          name="description"
          content=" Golfers, are you looking for an easy to use mobile application to track your golf score? Then golf journal is the app you are looking for!"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"></script>
      </Head>
      <Row>
        <Col md={12}>
          <div
            className={`d-flex align-items-center ${verticalAlignStyle.containerWrapper}`}
          >
            <div className={verticalAlignStyle.containerBox}>
              <h1 className="display-3">Sign Up</h1>
              <Form className="mt-5">
                <Form.Group>
                  <Form.Label className="sr-only">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="fullname"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Text className="text-muted text-left">
                    We&apos;ll never share your email with anyone else
                  </Form.Text>
                  <Form.Label className="sr-only">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="sr-only">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </Form.Group>
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
                    <option value="tier three">
                      $3.99 - 12 games per month
                    </option>
                    <option value="tier four">$6.99 - Unlimited games</option>
                  </Form.Control>
                </Form.Group>
                {subscription !== 'tier one' && <CardInput />}
                <Button
                  id="signup"
                  size="lg"
                  onClick={handleSubmission}
                  disabled={!stripe}
                  className={`${btnStyles.green} my-4 w-100`}
                >
                  Continue
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
