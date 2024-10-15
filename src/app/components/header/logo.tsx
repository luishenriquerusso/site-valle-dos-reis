import Link from 'next/link'
import Image from 'next/image'

export function Logo() {
  return (
      <Link href="/" aria-label="Valle dos Reis">
        <Image 
          src="/images/logo.png" 
          alt="Valle dos Reis" 
          width={80} 
          height={80}       
        />
      </Link>
  )
}