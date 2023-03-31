import * as React from 'react';
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Sidebar from '../Navigation/Sidebar';

import { 
    RiMenuFill,
    RiCloseLine } from 'react-icons/ri';
import Datepicker from 'react-tailwindcss-datepicker';
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
        <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
            {/* Sidebar */}
                <Sidebar/>
            {/* Btn menu movil*/}
            <button 
            onClick={handleSidebar} 
            className='block lg:hidden absolute bottom-4 right-4 bg-violet-500 p-2 text-white rounded-full text-2xl'>
                {sidebar ? <RiCloseLine /> : <RiMenuFill/>}
            </button>
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