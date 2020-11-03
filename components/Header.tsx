import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGolfBall } from '@fortawesome/free-solid-svg-icons/faGolfBall'
import styles from '../styles/Header.module.css'

const Header = (): JSX.Element => (
  <header className={`${styles.header} stories-header`}> 
    <Link href="/welcome">
    <a>
      <FontAwesomeIcon
        icon={faGolfBall}
      />
      <h1>Golf Journal</h1>
    </a>
  </Link>
  </header>
  
)

export default Header
