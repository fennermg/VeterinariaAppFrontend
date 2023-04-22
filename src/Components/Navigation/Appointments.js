import React from 'react';
import {useState} from 'react';
import '../../../src/index.css';
import ModalRoot from '../Modals/components/ModalRoot';
import ModalService from '../Modals/services/ModalService';
import AddPatient from '../Modals/AddPatient';
import AddAppointment from '../Modals/AddAppointment';
import Table, { AvatarCell, SelectColumnFilter, StatusPill, clickeableCell} from '../Table/Table'


import { 
    RiMenuFill,
    RiCloseLine,
    } from 'react-icons/ri';
import Sidebar from './Sidebar';
import Header from './Header';

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
      {
        fecha: '04/21/2023',
        hora: '01:00 PM',
        motivo: 'Monitoreo',
        estado: 'Programado',
        tiempo_estimado: '30 min',
        paciente: 'Max',
        responsable: 'Bosco Castillo',
      },
      {
        fecha: '04/21/2023',
        hora: '02:00 PM',
        motivo: 'Cirugia',
        estado: 'Programado',
        tiempo_estimado: '30 min',
        paciente: 'Merlina',
        responsable: 'Orlando Varela',
      },
      {
        fecha: '04/21/2023',
        hora: '04:00 PM',
        motivo: 'Monitoreo',
        estado: 'Programado',
        tiempo_estimado: '30 min',
        paciente: 'Hilda Rosa Maria',
        responsable: 'Orlando Varela',
      },
      {
        fecha: '04/22/2023',
        hora: '02:00 PM',
        motivo: 'Cirugia',
        estado: 'Programado',
        tiempo_estimado: '30 min',
        paciente: 'Neko Vargas',
        responsable: 'Diego Vargas',
      },
    ]
    return [...data, ...data, ...data]
  }


export default function Appointments(){

    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar);
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
        {
          Header: "Estado",
          accessor: 'estado',
        },
        {
          Header: "Tiempo estimado",
          accessor: 'tiempo_estimado',
        },
        {
          Header: "Paciente",
          accessor: 'paciente',
        },
        {
          Header: "Responsable",
          accessor: 'responsable',
          Filter: SelectColumnFilter,  // new
          filter: 'includes',
        },
      ], [])
    
      const data = React.useMemo(() => getData(), [])

    const addModal = () => {
        ModalService.open(AddAppointment);
      };

    return(
        <div className='max-h-screen grid grid-col-1 lg:grid-cols-6'>
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
                        <h1 className='text-3xl font-semibold'>Citas</h1>
                    </div>
                    {/* Table */}
                    <div className=' bg-white mt-6 border-2 rounded-xl p-12 flex items-center lg:w-[100%] w-full'>
                        <div className=' container md:-w4/5 wl:w-3/5 mx-auto'>
                            <div className='relative'>
                                <ModalRoot/>
                                    <button  
                                        className='text-white top-0 right-0 bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                                        onClick={addModal}
                                    >
                                        Agregar
                                    </button>  
                            </div>
                            <div className='mt-5'>
                             <Table columns={columns} data={data} />
                            </div>
                            
                        </div>
                        
                    </div> 
               </div>
            </div>
        </div>   
    )
}