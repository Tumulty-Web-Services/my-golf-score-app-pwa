import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Open Sans Regular';
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
