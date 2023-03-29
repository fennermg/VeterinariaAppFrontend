import * as React from 'react';
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Patients from '../Navigation/Patients';
import Modal from 'react-overlays/Modal';

import { RiDashboardLine, 
    RiHealthBookLine, 
    RiFolderUserLine, 
    RiLogoutBoxRLine,
    RiMenuFill,
    RiCloseLine,
    RiSearchLine,
    RiNotification2Line,
    RiArrowDownSLine } from 'react-icons/ri';
import Datepicker from 'react-tailwindcss-datepicker';
import ToggleVisibility from '../Navigation/ToggleVisibility';

export default function Dashboard(){

    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar);
    }
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    })
    const location = useLocation()
    const handleValueChange = (newValue) =>{
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    const [patient, setPatient] = useState(false);


    return(
        <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
            {/* Sidebar */}
            <div className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full top-0 z-50 bg-white 
            ${sidebar ? "-left-0" : "-left-full"}  
            w-full h-full overflow-y-scroll col-span-1 p-8 border-r`}>
                {/* Logo */}
                <div className='text-center p-15 pt-0 mt-0'>
                    <img alt="logo"src="nicavets.png" className='h-auto'/>
                </div>
                <div className='flex flex-col justify-between h-[450px]'>
                    {/* Menu */}
                    <nav>
                        <ul>
                            <li>
                                <a 
                                href=''
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors'
                                >
                                    <RiDashboardLine />
                                    Dashboard
                                </a>
                            </li> 
                            <li>
                                <a 
                                href="#" 
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors'>
                                    <RiHealthBookLine/>
                                    Pacientes
                                </a>
                            </li> 
                            <li>
                                <a 
                                href="#" 
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors'>
                                    <RiFolderUserLine/>
                                    Responsables
                                </a>
                            </li> 
                        </ul>
                    </nav>
                    {/* Logout */}
                    <div className='flex flex-col gap-4'>
                        <a href = '#' className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors'>
                            <RiLogoutBoxRLine/>
                            Salir
                        </a>
                    </div>
                </div>    
            </div>
            {/* Btn menu movil*/}
            <button 
            onClick={handleSidebar} 
            className='block lg:hidden absolute bottom-4 right-4 bg-violet-500 p-2 text-white rounded-full text-2xl'>
                {sidebar ? <RiCloseLine /> : <RiMenuFill/>}
            </button>
            {/* Content */}
            <div className='col-span-5'>
                {/* Header */}
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
                                    {location.state.id} <RiArrowDownSLine/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* Content */}
                <div className='p-4 lg:p-12 bg-gray-100'>
                    {/* Title */}
                    <div>
                        <h1 className='text-3xl font-semibold'>Casa Lupita</h1>
                    </div>
                    {/* Calendar */}
                    <div className='bg-white mt-6 rounded-xl p-12 flex items-center lg:w-[50%] w-full'>
                        <h1 className='flex items-center w-full'>
                            <Datepicker
                                value={value}
                                onChange={handleValueChange}
                            />
                        </h1>
                    </div>    
                </div>
            </div>
        </div>
    )
}