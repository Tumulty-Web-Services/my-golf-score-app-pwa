import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from './Logo'
import styles from '../styles/Header.module.css'
import netlifyAuth from '../utils/netlifyAuth';

export default function Header() {
  const router = useRouter();
  const signOut = () => {
    netlifyAuth.signout(() => {
      console.log('ummmmm')
    })
  }
  return (
    <header className={`${styles.header} stories-header`}>
      <Container>
        <Navbar expand="lg">
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="mr-auto justify-content-end"
          >
            <Nav>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/support">Support</Nav.Link>
              <Nav.Link href="/feedback">Feedback</Nav.Link>
              <button onClick={() => signOut()}>Logout</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}
