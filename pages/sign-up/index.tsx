import React, { useState } from 'react'
import Head from 'next/head'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import btnStyles from '../../styles/BtnStyles.module.css'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'
import styles from '../../styles/FormPages.module.css'

export default function SignUp(): JSX.Element {
  const stripe = useStripe()
  const elements = useElements()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  // handle create auth0 account
  // async function auth0Handler() {
  //   const newUser = {
  //     name,
  //     nickname,
  //     email,
  //     password,
  //   }
  //   /* eslint-disable */
  //   const webAuth = new auth0.WebAuth({
  //     domain: process.env.AUTH0_DOMAIN,
  //     clientID: process.env.AUTH0_CLIENTID,
  //   })

  //   webAuth.signup(
  //     {
  //       connection: process.env.AUTH0_DB_CONNECTION,
  //       ...newUser,
  //     },
  //     function (err) {
  //       if (err) return alert('Something went wrong: ' + err.message)
  //       return alert('success signup without login!')
  //     }
  //   )
  // }

  // handle stripe payments
  async function handlePayment() {
    const newNickname = email.substring(0, email.lastIndexOf('@'))

    if (!stripe || !elements) {
      return
    }
    const cardElement = elements.getElement(CardElement)

    // create a new customer

    // then create a new subscript with that customer
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        email: email,
      },
    })

    if (error) {
      // console.log('[error]', error);
    } else {
      setNickname(newNickname)
      // console.log('[PaymentMethod]', paymentMethod);
    }

    return nickname
  }

  async function handleSubmission() {
    await handlePayment()

    return true
  }

  return (
    <Container className={styles.vh80}>
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
