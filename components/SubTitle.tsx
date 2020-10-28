import React from 'react'
import styles from '../styles/SubTitle.module.css'

type Props = {
  title: string
}

export default function SubTitle({ title }: Props): JSX.Element {
  return <h2 className={`${styles.subTitle} stories-subtitle`}>{title}</h2>
}
