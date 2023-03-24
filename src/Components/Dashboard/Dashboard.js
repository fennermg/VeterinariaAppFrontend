import * as React from 'react';
import { useState } from 'react';

import { RiDashboardLine, 
    RiHealthBookLine, 
    RiFolderUserLine, 
    RiLogoutBoxRLine,
    RiMenuFill,
    RiCloseLine,
    RiSearchLine,
    RiNotification2Line,
    RiArrowDownSLine } from 'react-icons/ri';

export default function Dashboard(){

    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar);
    }

    return(
        <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
            {/* Sidebar */}
            <div className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full top-0 z-50 bg-white 
            ${sidebar ? "-left-0" : "-left-full"}  
            w-full h-full overflow-y-scroll col-span-1 p-8 border-r`}>
                {/* Logo */}
                <div className='text-center p-8'>
                    <img src="nicavets.png"/>
                </div>
                <div className='flex flex-col justify-between h-[650px]'>
                    {/* Menu */}
                    <nav>
                        <ul>
                            <li>
                                <a 
                                href="#" 
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors'>
                                    <RiDashboardLine/>
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
                                    Dueños
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
            <button onClick={handleSidebar} className='lg:hidden absolute bottom-4 right-4 bg-violet-500 p-2 text-white rounded-full text-2xl'>
                {sidebar ? <RiCloseLine /> : <RiMenuFill/>}
            </button>
            {/* Content */}
            <div className='col-span-5'>
                {/* Header */}
                <header>
                    {/* Search */}
                    <form>
                        <div className='items-center flex'>
                            <RiSearchLine/>
                            <input type='text' className='bg-red-200' placeholder='Buscar'/>
                        </div>
                    </form>
                    {/* User */}
                    <nav>
                        <ul>
                            <li>
                                <a href="#">
                                    <RiNotification2Line/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Fenner Mena <RiArrowDownSLine/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}