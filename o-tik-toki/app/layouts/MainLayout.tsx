import React from 'react';
import { usePathname } from 'next/navigation';
import TopNav from './shared/TopNav';
import SideNavMain from './shared/SideNavMain';

const MainLayout = ({children}: {children: React.ReactNode}) => {

    const pathname = usePathname();
  return (
    <>
    <TopNav children={children} />
    <div className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${pathname === '/' ? 'max-w-[1140px]' : ''}`}>
    <SideNavMain children={children}/>
    {children}
    </div>
       
    </>
  )
}

export default MainLayout;