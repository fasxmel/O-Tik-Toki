'use client'
import React from 'react'
import { usePathname,useRouter } from 'next/navigation'
import Link from 'next/link';

const TopNav = ({children}: {children: React.ReactNode}) => {

    const pathname = usePathname();
    const router = useRouter();


  return (
    <div id='top-nav' className='fixed bg-white z-30 flex items-center w-full border-b h-[60px]'>
        <div className={`flex items-center justify-between gap-6 w-full px-4 mx-auto ${pathname === '/' ? 'max-w-[1150px]' : ''}`}>

            <Link href={'/'}>
               <img  className='min-w-[115px] w-[115px]' src="images/logo2.png" alt="logo" />
            </Link>
           
           
        </div>
    </div>
  )
}

export default TopNav;