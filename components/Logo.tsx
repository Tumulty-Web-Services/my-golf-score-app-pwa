import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGolfBall } from '@fortawesome/free-solid-svg-icons/faGolfBall'
import styles from '../styles/Logo.module.css'

const Logo = (): JSX.Element => (
  <Link href="/">
    <a className={`${styles.logo} stories-logo`}>
      <FontAwesomeIcon icon={faGolfBall} />
      <h1>Golf Journal</h1>
    </a>
  </Link>
)

export default Logo
