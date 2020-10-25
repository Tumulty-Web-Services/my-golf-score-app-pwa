import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = (): JSX.Element => (
  <Link href="/welcome">
    <a className={`${styles.header} stories-header`}>
      <h1>GOLF JOURNAL</h1>
    </a>
  </Link>
)

export default Header
