import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SocialMediaIcons from './SocialMediaIcons'
import styles from 'styles/Footer.module.css'

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear()
  return (
    <footer className={`${styles.footer} stories-footer`}>
      <Container>
        <Row className="justify-content-center">
          <p className="mb-0 pb-0">
            Powered by{' '}
            <Link href="https://tumultywebservices.dev">
              <a>Tumulty Web Services</a>
            </Link>{' '}
            © {year}
          </p>
          <div className="w-100 d-block">
            <SocialMediaIcons />
          </div>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
