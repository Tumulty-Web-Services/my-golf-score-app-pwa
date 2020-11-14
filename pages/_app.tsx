import type { AppProps } from 'next/app'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fonts.css'
const stripePromise = loadStripe(process.env.STRIPE_API_ID)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header authed={pageProps.authed} />
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
