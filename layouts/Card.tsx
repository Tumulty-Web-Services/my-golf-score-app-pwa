import React from 'react'
import styles from '../styles/Card.module.css'

type Props = {
  children: JSX.Element
}

export default function Card({ children }: Props): JSX.Element {
  return <div className={`${styles.card} stories-card`}>{children}</div>
}
