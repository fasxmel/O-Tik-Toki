'use client'
import React from 'react'
import { usePathname,useRouter } from 'next/navigation'
import Link from 'next/link';
import "../../../app/globals.css";
import { BiSearch, BiUser } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

const TopNav = ({children}: {children: React.ReactNode}) => {

    const pathname = usePathname();
    const router = useRouter();


    const handleSearchName = (e: {target: {value: string}}) => {
        router.push(`/search?q=${e.target.value}`);
        console.log(e.target.value);
        
    }

    const goTo = () => {
        console.log('Go to search');
    }


  return (
    <div id='top-nav' className='fixed bg-white z-30 flex items-center w-full border-b h-[60px]'>
        <div className={`flex items-center justify-between gap-6 w-full px-4 mx-auto ${pathname === '/' ? 'max-w-[1150px]' : ''}`}>
            
            <Link href={'/'}>
               <img  className='min-w-[115px] w-[115px]' src="images/logo2.png" alt="logo" />
            </Link>
                          {/*TODO: Responsive search on mobile*/}
            <div className='relative flex md:flex items-center justify-end bg-[#f1f1f2] p-1 rounded-full max-[430px] w-[250px] h-[30px]'>
               <input 
               className='w-full p-3 m-2 bg-transparent placeholder-[#838383] text-[18px] focus:outline-none' 
               type="text" 
               placeholder='Search for anything'
               onChange={handleSearchName}
               />

               <div className='px-3 py-1 flex items-center border-l border-l-gray-300'>
                <BiSearch color='#A1A2A7' size={22} />
               </div>

                         {/*TODO: Responsive search on mobile*/}
               <div className='absolute bg-white max-w-[410px] h-auto w-full z-20 right-0 top-12 border p-1'>

                 <div className='p-1'>
                  <Link 
                  className='flex items-center justify-between w-full cursor-pointer hover:bg-[#F12B56] p-1 px-2 hover:text-white' 
                  href={'/profile/1'}
                  >
                 
                 <div className='flex items-center'>
                     <img className='w-[40px] rounded-md' src="https://placehold.co/40" alt="user" />
                     <div className='truncate ml-2'>
                       Hristoz Ognyanov
                     </div>
                 </div>

                </Link>

                 </div>

               </div>

            </div>

            <div className='flex items-center gap-3'>
                <button 
                className='flex items-center border rounded-sm py-[6px] hover:bg-gray-100 pl-1.5' 
                onClick={() => goTo()}
                >
                  <AiOutlinePlus color='#000000' size={22} />
                  <span className='px-2 font-medium text-[15px]'>Upload</span>
                </button>

                {true 
                ? (
                  <div className='flex items-center'>

                  <button className='flex items-center bg-[#F02C56] text-white px-3 py-[6px] rounded-md'>
                    <span className='whitespace-nowrap mx-4 font-medium text-[15px]'>Log in</span>
                  </button>

                  <BsThreeDotsVertical color='#161724' size={25} />

                  </div>
                )

                : (
                  <div className='flex items-center'>
                    <div className='relative'>
                      <button className='mt-1 border border-gray-200 rounded-full'>
                       <img  className='w-[35px] h-[35px] rounded-full' src="https://placehold.co/35" alt="user" />
                      </button>

                      <div className='absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[40px] right-0'>

                        <button className='flex items-center justify-start w-full px-2 py-3 hover:bg-gray-100 cursor-pointer'>
                          <BiUser size={20} />
                          <span className='ml-2 font-semibold text-sm'>Profile</span>
                        </button>

                        <button className='flex items-center justify-start w-full px-2 py-3 hover:bg-gray-100 cursor-pointer'>
                          <FiLogOut size={20} />
                          <span className='ml-2 font-semibold text-sm'>Log out</span>
                        </button>

                      </div>
                    </div>
                  </div>
                )}

            </div>
                            
        </div>
    </div>
  )
}

export default TopNav;