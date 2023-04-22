import React from 'react';
import {useState} from 'react';
import '../../../src/index.css';
import ModalRoot from '../Modals/components/ModalRoot';
import ModalService from '../Modals/services/ModalService';
import AddPatient from '../Modals/AddPatient';
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
        nombre: 'Luna Herrera',
        especie: 'Perro',
        raza: 'Mestizo',
        sexo: 'Hembra',
        color: 'Cafe con negro',
        castrado: 'Si',
        responsable: 'Obed Herrera',
      },
      {
        nombre: 'Sir Browns',
        especie: 'Perro',
        raza: 'Mestizo',
        sexo: 'Macho',
        color: 'Blanco con manchas cafe',
        castrado: 'Si',
        responsable: 'Franck Melendez',
      },
      {
        nombre: 'Hilda Rosa Maria',
        especie: 'Loro',
        raza: 'Psittacoidea',
        sexo: 'Hembra',
        color: 'Verde con rojo',
        castrado: 'No',
        responsable: 'Orlando Varela',
      },
      {
        nombre: 'Louis Vargas',
        especie: 'Gato',
        raza: 'Mestizo',
        sexo: 'Macho',
        color: 'Negro',
        castrado: 'Si',
        responsable: 'Diego Vargas',
      },
      {
        nombre: 'Kibara Vargas',
        especie: 'Gato',
        raza: 'Mestizo',
        sexo: 'Hembra',
        color: 'Blanco',
        castrado: 'Si',
        responsable: 'Diego Vargas',
      },
      {
        nombre: 'Luna Herrera',
        especie: 'Perro',
        raza: 'Mestizo',
        sexo: 'Hembra',
        color: 'Cafe con negro',
        castrado: 'Si',
        responsable: 'Obed Herrera',
      },
    ]
    return [...data, ...data, ...data]
  }


export default function Patients(){

    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar);
    }

    const columns = React.useMemo(() => [
        {
          Header: "Nombre",
          accessor: 'nombre',
          Cell: clickeableCell,
        },
        {
          Header: "Especie",
          accessor: 'especie',
        },
        {
          Header: "Raza",
          accessor: 'raza',
          Cell: StatusPill,
        },
        {
          Header: "Sexo",
          accessor: 'sexo',
        },
        {
          Header: "Color",
          accessor: 'color',
        },
        {
          Header: "Castrado",
          accessor: 'castrado',
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
        ModalService.open(AddPatient);
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