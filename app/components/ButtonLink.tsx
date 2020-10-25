import React from 'react'
import Link from 'next/link'
import styles from '../styles/Button.module.css'

type Props = {
  link: string
  label: string
}

export default function ButtonLink({ link, label }: Props) {
  return (
    <Link href={link}>
      <a className={`${styles.button} stories-btn`}>{label}</a>
    </Link>
  )
}
