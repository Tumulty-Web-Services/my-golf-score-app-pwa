import React from 'react'
import Head from 'next/head'
import ButtonLink from '../../components/ButtonLink'

export default function Login() {
  return (
    <>
      <Head>
        <title>Golf Journal - Login</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <div>
        <div className="button-container">
          <ButtonLink label="LOGIN" link="/welcome" />
        </div>
      <style jsx>{`
        div {
          text-align: center;
          display: flex;
          justify-content: center;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }
        
        .button-container {
          min-width: 320px;
        }
      `}</style>
      </div>
    </>
  )
}
