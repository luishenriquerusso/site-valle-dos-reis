'use client'

import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FaUserCircle } from "react-icons/fa"
// eslint-disable-next-line
export function MobileMenu({ user } : { user: any }) {

  return (
    <DropdownMenu>

      <DropdownMenuTrigger>
        {user?.image ? 
          <Image src={user?.image} className=" rounded-full w-48" width={40} height={40} alt={`${user?.name}`} /> : 
          <FaUserCircle size={35} color='#ae9668' />
        }
      </DropdownMenuTrigger>

      <DropdownMenuContent>

        <Link href="/" passHref>
          <DropdownMenuItem>Olá, {user?.name}</DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />

        {/* 

        {user?.role === "admin" || user?.role === "superAdmin" && 
        <>
          <Link href="/dashboard" passHref>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />     
        </>        
        }

        <Link href="/dashboard/orders" passHref>
          <DropdownMenuItem>Meus Pedidos</DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator /> */}

      </DropdownMenuContent>

    </DropdownMenu>
  )
}