import React from 'react'
import Head from 'next/head'
import ButtonLink from '../../components/ButtonLink'

export default function Login() {
  return (
    <>
      <Head>
        <title>Golf Journal</title>
        <meta
          name="description"
          content="This is awesome, simple mobile web application designed to replace the golf score card. "
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <div>
        <ButtonLink label="LOGIN" link="/welcome" />
      </div>
    </>
  )
}
