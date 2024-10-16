'use client'

import { useSession } from 'next-auth/react';
import { Logo } from "./logo";
import { MobileMenu } from "./menu/mobile";

//import { usePathname } from 'next/navigation';

export function Header(){

  const { data: session } = useSession();
   const user = session?.user;
  // const pathname = usePathname();


  function MiddleHeader(){
    return(
      <div className='flex items-center justify-center'>
         contato@valledosreis.com.br  

         Plantao 24 horas  11 4138-3334  
         
         WhatsApp: 11 94004-8668  
      </div>
    )
  }

  return(
    <div className=" sticky top-0 z-50 mt-4 container flex justify-between mx-4">
       <Logo/>

       <MiddleHeader/>

       <MobileMenu user={user} />
    </div>
  )
}