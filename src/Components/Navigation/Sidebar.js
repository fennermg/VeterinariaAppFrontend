import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { RiDashboardLine, 
    RiHealthBookLine, 
    RiFolderUserLine, 
    RiLogoutBoxRLine,
    RiCloseLine,
    RiMenuFill,
    RiTeamFill,
    } from 'react-icons/ri';
import axios from 'axios';
import { logout } from '../../Services/Services';

 


export default function Sidebar(){
    const history = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar);
    }
    function Logout(){
        logout().then(response => {
            if(response.status == 200){
                
                history("/");
            }
        })
    }
    return(
        <div className=''>
            <div className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full top-0 z-50 bg-white transition-all ${
                sidebar ? "-left-0" : "-left-full"}  
                w-full h-full col-span-1 p-8 border-r`}>
                {/* Logo */}
                <div className='text-center p-15 pt-0 mt-0'>
                    <img alt="logo"src="nicavets.png" className='h-auto'/>
                </div>
                <div className='flex flex-col justify-between h-[450px]'>
                    {/* Menu */}
                    <nav>
                        <ul>
                            <li>
                                <Link 
                                to ='http://localhost:3000/Dashboard'
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 text-base font-semibold hover:text-white rounded-lg transition-colors'
                                >
                                    <RiDashboardLine />
                                    Dashboard
                                </Link>
                            </li> 
                            <li>
                                <Link 
                                to="http://localhost:3000/Patients" 
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 text-base font-semibold hover:text-white rounded-lg transition-colors'>
                                    <RiHealthBookLine/>
                                    Pacientes
                                </Link>
                            </li> 
                            <li>
                                <Link 
                                to="http://localhost:3000/Revisiones" 
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 text-base font-semibold hover:text-white rounded-lg transition-colors'>
                                    <RiFolderUserLine/>
                                    Revisiones
                                </Link>
                            </li>
                            <li>
                                <Link 
                                to="http://localhost:3000/Appointments" 
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 text-base font-semibold hover:text-white rounded-lg transition-colors'>
                                    <RiFolderUserLine/>
                                    Citas
                                </Link>
                            </li>
                            <li>
                                <Link 
                                to="http://localhost:3000/Responsables" 
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 text-base font-semibold hover:text-white rounded-lg transition-colors'>
                                    <RiTeamFill/>
                                    Responsables
                                </Link>
                            </li>
                            <li>
                                <Link 
                                to="http://localhost:3000/Users" 
                                className='flex items-center gap-4 hover:bg-violet-500 p-4 text-gray-400 text-base font-semibold hover:text-white rounded-lg transition-colors'>
                                    <RiFolderUserLine/>
                                    Usuarios
                                </Link>
                            </li> 
                        </ul>
                    </nav>
                    {/* Logout */}
                    <div className='flex flex-col gap-4'>
                        <a
                        className='flex items-center gap-4 hover:bg-violet-500 p-4 text-base text-gray-400 font-semibold hover:text-white rounded-lg transition-colors'
                        onClick={Logout}>
                            <RiLogoutBoxRLine/>
                            Salir
                        </a>
                    </div>
                    
                </div>
                   
            </div>
            {/* Btn menu movil*/}
            <button 
            onClick={handleSidebar} 
            className='block lg:hidden fixed bottom-10 right-6 bg-violet-500 p-2 text-white rounded-full text-2xl'>
                {sidebar ? <RiCloseLine /> : <RiMenuFill/>}
            </button>
        </div>   
    )
}