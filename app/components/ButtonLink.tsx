import React from 'react'
import Link from 'next/link'


type Props = {
  link: string;
  label: string;
}

export default function ButtonLink({link, label} : Props) {
  return (
    <Link href={link}>
      <a>
        {label}
      </a>
   </Link>
  )
}