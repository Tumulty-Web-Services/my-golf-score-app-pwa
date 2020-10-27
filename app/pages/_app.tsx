import type { AppProps } from 'next/app'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
            min-height: 100vh;
            flex-direction: column;
            margin: 0;
          }

          header,
          main {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
          }

          header {
            height: 10vh;
            text-align: center;
          }

          main {
            height: 85vh;
          }

          @media (min-width: 576px) {
            header,
            main {
              max-width: 540px;
            }
          }

          @media (min-width: 768px) {
            header,
            main {
              max-width: 720px;
            }
          }

          @media ((min-width: 992px)) {
            header,
            main {
              max-width: 960px;
            }
          }

          @media (min-width: 1200px) {
            header,
            main {
              max-width: 1140px;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default MyApp
