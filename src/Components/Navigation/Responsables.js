import React from 'react';
import {useState} from 'react';
import '../../../src/index.css';
import AddResponsable from '../Modals/AddResponsable';
import ModalRoot from '../Modals/components/ModalRoot';
import ModalService from '../Modals/services/ModalService';

import { 
    RiMenuFill,
    RiCloseLine,
    } from 'react-icons/ri';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Responsables(){

    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar);
    }

    const addModal = () => {
        ModalService.open(AddResponsable);
      };

    return(
        <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
            {/* Sidebar */}
            <Sidebar/>
            <button 
            onClick={handleSidebar} 
            className='block lg:hidden absolute bottom-4 right-4 bg-violet-500 p-2 text-white rounded-full text-2xl'>
                {sidebar ? <RiCloseLine /> : <RiMenuFill/>}
            </button>
            {/* Header */}
            <div className='col-span-5'>
                <Header/>
                {/* Content */}
                <div className='p-4 lg:p-12 bg-gray-100'>
                    {/* Title */}
                    <div>
                        <h1 className='text-3xl font-semibold'>Responsables</h1>
                    </div>
                    {/* Calendar */}
                    <div className='bg-white mt-6 rounded-xl p-12 flex items-center lg:w-[90%] w-full'>
                    <div>
                            <div className='relative'>

                            <ModalRoot/>
                                        <button  
                                            className='text-white top-0 right-0 bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                                            onClick={addModal}
                                        >
                                            Agregar
                                        </button>
                            </div>
                            <table className='w-full '>
                                <thead className=''>
                                    <tr className='border-b-4'>
                                        <th className='p-3 text-sm font-semibold tracking-wide'>
                                            No.
                                        </th>
                                        <th className='p-3 text-sm font-semibold tracking-wide'>
                                            Paciente
                                        </th>
                                        <th className='p-3 text-sm font-semibold tracking-wide'>
                                            Responsable
                                        </th>
                                        <th className='p-3 text-sm font-semibold tracking-wide'>
                                            Tipo
                                        </th>
                                        <th className='p-3 text-sm font-semibold tracking-wide'>
                                            Raza
                                        </th>
                                        <th className='p-3 text-sm font-semibold tracking-wide'>
                                            Sexo
                                        </th>
                                        <th className='p-3 text-sm font-semibold tracking-wide'>
                                            Color
                                        </th>
                                        <th className='p-3 text-sm font-semibold tracking-wide'>
                                            No. de Tarjeta
                                        </th>
                                        <th className='p-3 text-sm font-semibold tracking-wide'>
                                            Castrado/Esterilizado
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='bg-white'>
                                        <td className='p-3 text-sm text-gray-700'>
                                            <a href="#">01</a>
                                        </td>
                                        <td className='p-3 text-sm text-gray-700'>
                                            <a href="#">Luna Herrera</a>
                                        </td>
                                        <td className='p-3 text-sm text-gray-700'>
                                            <a href="#">Obed Herrera</a>
                                        </td>
                                        <td className='p-3 text-sm text-gray-700'>
                                            <a href="#">Perro</a>
                                        </td>
                                        <td className='p-3 text-sm text-gray-700'>
                                            <a href="#">Mestizo</a>
                                        </td>
                                        <td className='p-3 text-sm text-gray-700'>
                                            <a href="#">Cafe</a>
                                        </td>
                                        <td className='p-3 text-sm text-gray-700'>
                                            <a href="#">Femenino</a>
                                        </td>
                                        <td className='p-3 text-sm text-gray-700'>
                                            <a href="#">01-050223</a>
                                        </td>
                                        <td className='p-3 text-sm text-gray-700'>
                                            <a href="#">Si</a>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        
                    </div>   
                </div>
            </div>
        </div>   
    )
}