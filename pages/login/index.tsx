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
          <p><strong> Welcome to golf journal!</strong></p>
          <p>Please login to retrieve your golf records and start a new game.</p>
          <ButtonLink label="LOGIN" link="/api/login" />
        </div>
        <style jsx>{`

          .button-container {
            margin-top: 30%;
            margin-bottom: 30%;   
            margin-left: auto;
            margin-right: auto;
            padding: 1em;        
            box-shadow: 0 8px 20px 0 rgb(0 0 0 / 8%);
            border: 3.5px solid #4A5915;
            border-radius: 2.5px;
            text-align: center;
            background-color: #fff;
          }

          .button-container p strong {
            font-size: 1.3rem;  
            padding-top: 1em;
          }

          
          .button-container p:nth-child(2) {
              font-size: 1.2rem;
              margin-bottom: 1.5em;
              margin-left: auto;
              margin-right: auto;
              width: 80%;
            }

          @media (min-width: 756px) {
            .button-container {
              max-width:500px;
            }

            .button-container p strong {
              font-size: 1.8rem; 
            }

          }


        `}</style>
      </div>
    </>
  )
}
