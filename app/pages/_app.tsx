import type { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="golf-journal">
        <header>
          <Link href="/welcome">
            <a>
              <h1>
                GOLF JOURNAL
              </h1>
            </a>
          </Link>
        </header>
        <main>
          <Component {...pageProps} />
        </main>        
        <footer>
          <p> Golf Journal 2020 </p>
        </footer>      
      </div>
    </>
  )
}

export default MyApp