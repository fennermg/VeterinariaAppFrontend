import React, {useState} from 'react';

import { RiDashboardLine, 
    RiHealthBookLine, 
    RiFolderUserLine, 
    RiLogoutBoxRLine,
    RiCloseLine,
    RiMenuFill,
    } from 'react-icons/ri';

export default function Sidebar(){

    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar);
    }

    return(
        <div>
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
                                href='http://localhost:3000/Dashboard'
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors'
                                >
                                    <RiDashboardLine />
                                    Dashboard
                                </a>
                            </li> 
                            <li>
                                <a 
                                href="http://localhost:3000/Patients" 
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors'>
                                    <RiHealthBookLine/>
                                    Pacientes
                                </a>
                            </li> 
                            <li>
                                <a 
                                href="http://localhost:3000/Responsables" 
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors'>
                                    <RiFolderUserLine/>
                                    Responsables
                                </a>
                            </li> 
                        </ul>
                    </nav>
                    {/* Logout */}
                    <div className='flex flex-col gap-4'>
                        <a href = 'http://localhost:3000' className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors'>
                            <RiLogoutBoxRLine/>
                            Salir
                        </a>
                    </div>
                </div>    
            </div>
            
        </div>
    )
}