'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import MenuItem from './MenuItem';

import MenuItemFollow from '@/app/layouts/shared/MenuItemFollow';
import ClientOnly from '@/app/components/ClientOnly';




const SideNavMain = ({children}: {children: React.ReactNode}) => {

   const patname = usePathname();

  return (
    <>
   <div id='side-nav-main' className={`fixed bg-white z-20 pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto ${patname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'}`}>
      <div className='lg:w-full w-[55px] mx-auto'>
        <Link href={'/'}>
         <MenuItem iconString="For You" colorString={patname === '/' ? '#F02C56' : ''} sizeString="25"/>
        </Link>
         <MenuItem iconString="Following" colorString="#000000" sizeString="25"/>
         <MenuItem iconString="LIVE" colorString="#000000" sizeString="25"/>

         <div className='border-b lg:ml-2 mt-2'/>
         <h3 className='lg:block hidden text-xs text-gray-600 font font-semibold pt-4 pb-2 px-2'>Sugjestet Acounts</h3>

         <div className='lg:hidden block pt-3'/>

         <ClientOnly>
          <div className='cursor-pointer'>
            <MenuItemFollow user={{id: '1', name: 'user 1', avatar:'https://placehold.co/50'}} />
          </div>
         </ClientOnly>
         
      </div>
   </div>
    </>
  )
}

export default SideNavMain;