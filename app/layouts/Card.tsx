import React from 'react'

type Props = {
  children: JSX.Element
}

export default function Card({ children }: Props): JSX.Element {
  return <div>{children}</div>
}
