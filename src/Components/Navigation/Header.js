import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { 
    RiSearchLine,
    RiNotification2Line,
    RiArrowDownSLine } from 'react-icons/ri';

export default function Header(){

    const location = useLocation()
    
    return(
        <div className='col-span-5'>
            <header className='flex flex-col md:flex-row gap-4 items-center justify-between lg:pl-12 p-4 w-full'>
                    {/* Search */}
                    <form className='w-full md:[40%] lg:w-[30%] order-1 md:-order-none'>
                        <div className='relative'>
                            <RiSearchLine className='absolute left-2 top-3'/>
                            <input 
                            type='text' 
                            className='bg-gray-200 py-2 pl-8 pr-4 outline-none rounded-lg w-full' 
                            placeholder='Buscar'/>
                        </div>
                    </form>
                    {/* User */}
                    <nav className='w-full md:[60%] lg:w-[70%] flex justify-center md:justify-end'>
                        <ul className='flex items-center gap-3'>
                            <li>
                                <a href="#" className='relative'>
                                    <RiNotification2Line className='text-xl'/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center gap-2 text-xl'>
                                    <RiArrowDownSLine/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
        </div>
    )
}