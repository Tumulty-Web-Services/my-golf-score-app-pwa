import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.css'
import '../public/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="./fonts.css" /> */}
      </Head>
      <div id="golf-journal">
        <header>
          <Header />
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <style jsx>{`
          #golf-journal {
            display: flex;
            flex-direction: column;
            margin: 0;
            padding-right: 15px;
            padding-left: 15px;
            padding-bottom: 20px;
            margin: 20px;
            border-radius: 20px;
            box-shadow: 0 8px 20px 0 rgb(0 0 0 / 8%);
            background-color: rgba(255, 255, 255, 0.33);
          }

          header {
            text-align: center;
          }

          @media (min-width: 576px) {
            #golf-journal {
              max-width: 540px;
            }
          }

          @media (min-width: 768px) {
            #golf-journal {
              max-width: 720px;
              margin-left: auto;
              margin-right: auto;
            }
          }

          @media ((min-width: 992px)) {
            #golf-journal {
              max-width: 960px;
              margin-left: auto;
              margin-right: auto;
            }
          }

          @media (min-width: 1200px) {
            #golf-journal {
              max-width: 700px;
              margin-left: auto;
              margin-right: auto;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default MyApp
