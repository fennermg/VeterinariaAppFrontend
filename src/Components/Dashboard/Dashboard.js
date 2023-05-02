import * as React from 'react';
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Sidebar from '../Navigation/Sidebar';
import Table, { AvatarCell, SelectColumnFilter, StatusPill, clickeableCell} from '../Table/Table'

import { 
    RiMenuFill,
    RiCloseLine } from 'react-icons/ri';
import Header from '../Navigation/Header';

const getData = () => {
    const data = [
      {
        fecha: '04/20/2023',
        hora: '02:00 PM',
        motivo: 'Cirugia',
        estado: 'Programado',
        tiempo_estimado: '30 min',
        paciente: 'Luna Herrera',
        responsable: 'Obed Herrera',
      },
      {
        fecha: '04/20/2023',
        hora: '09:00 AM',
        motivo: 'Monitoreo',
        estado: 'Programado',
        tiempo_estimado: '30 min',
        paciente: 'Sir Browns',
        responsable: 'Franck Melendez',
      },
    ]
    return [...data, ...data, ...data]
  }

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

    const columns = React.useMemo(() => [
        {
          Header: "Fecha",
          accessor: 'fecha',
          Cell: clickeableCell,
        },
        {
          Header: "Hora",
          accessor: 'hora',
        },
        {
          Header: "Motivo",
          accessor: 'motivo',
          Cell: StatusPill,
        },
        ], [])
    
      const data = React.useMemo(() => getData(), [])

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
                    <div className='bg-white mt-6 rounded-xl flex items-center'>
                        <div className='p-12'>
                            <div>
                                <h1 className='text-2xl font-semibold text-center'>
                                    Pacientes del dia
                                </h1>
                            </div>
                            <Table columns={columns} data={data} />
                        </div>
                    </div>
                    <div className='bg-white mt-6 rounded-xl flex items-center'>
                        
                        <div className='mt-5 p-12'>
                            <div>
                                <h1 className='text-2xl font-semibold text-center'>
                                    Pacientes en cirugia
                                </h1>
                            </div>
                            <Table columns={columns} data={data} />
                        </div>
                    </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}