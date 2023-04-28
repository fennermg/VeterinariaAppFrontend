import React, {useState} from 'react';
import '../../../src/index.css';
import ModalRoot from '../Modals/components/ModalRoot';
import ModalService from '../Modals/services/ModalService';
import AddPatient from '../Modals/AddPatient';
import Table, { SelectColumnFilter, StatusPill, clickeableCell} from '../Table/Table'
import Sidebar from './Sidebar';
import Header from './Header';
import { useEffect } from 'react';
import axios from 'axios';
import { getPatients } from '../../Services/Services';

export default function Patients(){

    const [patients, setPatients] = useState([]);

    useEffect(()=>{
      getPatients().then(response => setPatients(response.data));
    },[])

    const columns = React.useMemo(() => [
        {
          Header: "Nombre",
          accessor: 'nombre',
          Cell: clickeableCell,
        },
      ], [])
    
    const data = React.useMemo(() => patients)

    const addModal = () => {
        ModalService.open(AddPatient);
      };

    return(
        <div className='max-h-screen grid grid-col-1 lg:grid-cols-6'>
            {/* Sidebar */}
            <Sidebar/>
            {/* Header */}
            <div className='col-span-5'>
                <Header/>
                {/* Content */}
                <div className='p-4 lg:p-12 bg-gray-100 '>
                    {/* Title */}
                    <div>
                        <h1 className='text-3xl font-semibold'>Pacientes</h1>
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
                            <div className='mt-5 md:w-[100%]'>
                             <Table columns={columns} data={data} />
                            </div>   
                        </div>
                    </div> 
               </div>
            </div>
        </div>   
    )
}