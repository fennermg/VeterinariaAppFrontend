import * as React from 'react';
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Sidebar from '../Navigation/Sidebar';
import Table, { AvatarCell, SelectColumnFilter, StatusPill, clickeableCell} from '../Table/Table'

import { 
    RiMenuFill,
    RiCloseLine } from 'react-icons/ri';
import Header from '../Navigation/Header';


export default function Dashboard(){

    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar);
    }
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    })
    const handleValueChange = (newValue) =>{
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    return(
        <div className='min-h-screen grid grid-col-1 lg:grid-cols-6 md:grid-cols-2'>
            {/* Sidebar */}
                <Sidebar/> 
            {/* Content */}
            <div className='col-span-5'>
                {/* Header */}
                    <Header/> 
                {/* Content */}
                <div className='p-4 lg:p-12 bg-gray-100'>
                    {/* Title */}
                    <div>
                        <h1 className='text-3xl font-semibold'>Casa Lupita</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                    {/* Calendar */}
                
                    </div>  
                </div>
            </div>
        </div>
    )
}