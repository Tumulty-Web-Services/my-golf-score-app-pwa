import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import btnStyles from '../../styles/BtnStyles.module.css'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'
import { useUser } from '../../utils/passport/hooks'

export default function SignUp(): JSX.Element {
  useUser({ redirectTo: '/', redirectIfFound: true })
  const router = useRouter()
  const stripe = useStripe()
  const elements = useElements()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rPassword, setRPassword] = useState('')
  const [subscription, setSubscription] = useState('free')
  const [errMsg, setErrMsg] = useState('')

  // handle create new account
  async function authHandler() {
    if (password !== rPassword) {
      setErrMsg("These passwords don't match")
      return
    }

    try {
      const request = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: email,
          name: name,
          email: email,
          password: password,
          subscription: subscription,
        }),
      }).then((data) => data.json())

      if (request.status === 201) {
        router.push('/sign-up/success')
      } else if (request.status === 201 && subscription !== 'free') {
        handlePayment()
        return
      } else {
        throw new Error('There was an issue creating your new account.')
      }
    } catch (err) {
      console.error(err)
      setErrMsg(JSON.stringify(err))
    }
  }

  // handle stripe payments
  async function handlePayment() {
    if (!stripe || !elements) {
      return
    }

    await stripe.redirectToCheckout({
      lineItems: [{ price: subscription, quantity: 1 }],
      mode: 'subscription',
      successUrl: 'http://localhost:3400/sign-up/success',
      cancelUrl: 'http://localhost:3400/sign-up/cancel',
    })
  }

  return (
    <Container className={verticalAlignStyle.vh80}>
      <Head>
        <title>My Golf Score - Sign up</title>
        <meta
          name="description"
          content=" Golfers, are you looking for an easy to use mobile application to track your golf score? Then golf journal is the app you are looking for!"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row>
        {errMsg && (
          <Col sm={12}>
            <Alert variant="danger">{errMsg}</Alert>
          </Col>
        )}
        <Col sm={12}>
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
                <Form.Group>
                  <Form.Label className="sr-only">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="rPassword"
                    value={rPassword}
                    onChange={(e) => setRPassword(e.target.value)}
                    placeholder="Repeat Password"
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
                    <option value="price_1Hn1n7JBUO0xS4uV9oeHCyGs">
                      $.99 - 8 games per month
                    </option>
                    <option value="price_1Hn0keJBUO0xS4uVlAo3FzSz">
                      $3.99 - 12 games per month
                    </option>
                    <option value="price_1Hn1n7JBUO0xS4uV9oeHCyGs">
                      $6.99 - Unlimited games
                    </option>
                  </Form.Control>
                </Form.Group>
                {subscription !== 'free' && (
                  <Form.Group>
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                              color: '#aab7c4',
                            },
                          },
                          invalid: {
                            color: '#9e2146',
                          },
                        },
                      }}
                    />
                  </Form.Group>
                )}
                <Button
                  id="signup"
                  size="lg"
                  onClick={authHandler}
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
