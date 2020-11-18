import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Logo.module.css'

const Logo = (): JSX.Element => (
  <Link href="/">
    <a className={`${styles.logo} stories-logo`}>
      <Image
        src="/golfjournallogo.png"
        alt="golf journal"
        width={219}
        height={39}
      />
    </a>
  </Link>
)

export default Logo
