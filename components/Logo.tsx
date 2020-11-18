import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = (): JSX.Element => (
  <Link href="/">
    <a className="mt-2 mb-1">
      <Image
        src="/golfjournal-logo.png"
        alt="golf journal"
        width={219}
        height={36}
      />
    </a>
  </Link>
)

export default Logo
