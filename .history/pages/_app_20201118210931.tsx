import Head from 'next/head'
import Router from 'next/router'
import type { AppProps } from 'next/app'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import NProgress from 'nprogress'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'nprogress/nprogress.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'
const stripePromise = loadStripe(process.env.STRIPE_API_ID)

/**
 * Bind nprogress loader to app
 * */
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/golfjournal.ico" />
      </Head>
      <Header />
      <main>
        <Elements stripe={stripePromise}>
          <Component {...pageProps} />
        </Elements>
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
