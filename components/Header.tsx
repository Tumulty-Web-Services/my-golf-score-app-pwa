import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from './Logo'
import styles from '../styles/Header.module.css'

export default function Header() {
  const loggedIn = true
  return (
    <header className={styles.header}>
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
              {loggedIn && <Nav.Link href="/api/logout">Logout</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}
