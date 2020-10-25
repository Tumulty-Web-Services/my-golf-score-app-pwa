import React from 'react'
import styles from '../styles/SubTitle.module.css'

type Props = {
  title: string
}

const Header = ({ title }: Props): JSX.Element => (
  <h2 className={`${styles.subTitle} stories-subtitle`}>{title}</h2>
)

export default Header
