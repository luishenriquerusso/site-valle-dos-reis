'use client'

import { useSession } from 'next-auth/react';
import { Logo } from "./logo";

import { usePathname } from 'next/navigation';

export function Header(){

  const { data: session } = useSession();
  const user = session?.user;
  const pathname = usePathname();

  return(
    <div className=" sticky top-0 z-50 mt-4 container flex justify-center">
       <Logo/>
    </div>
  )
}