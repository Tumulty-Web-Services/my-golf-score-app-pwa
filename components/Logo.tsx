import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useUser } from '../utils/passport/hooks'

const Logo = (): JSX.Element => {
  const user: any = useUser({ redirectTo: '/' })
  return (
    <Link href={user ? '/profile' : '/'}>
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
}

export default Logo
