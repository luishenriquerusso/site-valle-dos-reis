'use client'

import { useSession } from 'next-auth/react';
import { Logo } from "./logo";
import { MobileMenu } from "./menu/mobile";
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
//import { usePathname } from 'next/navigation';

export function Header(){

  const { data: session } = useSession();
   const user = session?.user;
  // const pathname = usePathname();

  
  function MiddleHeader(){
    return(
      <div className='flex flex-wrap items-center justify-center space-x-4 md:space-x-8 lg:space-x-12'>
        <a href="mailto:contato@valledosreis.com.br" className='text-gray-500 hover:text-gray-700 transition duration-300 flex items-center font-mono cursor-pointer text-sm pb-1'>
        <FaEnvelope size={15} color="#ae9668" className='text-xl' style={{ verticalAlign: 'middle' }} />
          <span className='ml-2'>contato@valledosreis.com.br</span>
        </a>
        <a href="tel:1141383334" className='text-gray-500 hover:text-gray-700 transition duration-300 flex items-center font-mono cursor-pointer text-sm pb-1'>
        <FaPhone size={15} className='text-xl' color="#ae9668"  style={{ verticalAlign: 'middle' }} />
          <span className='ml-2'>Plantão 24 horas: 11 4138-3334</span>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5511940048668" className='text-gray-500 hover:text-gray-700 transition duration-300 flex items-center font-mono cursor-pointer text-sm'>
          <FaWhatsapp size={15} color="#ae9668"  className='text-xl' style={{ verticalAlign: 'middle' }} />
          <span className='ml-2'>11 94004-8668</span>
        </a>
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