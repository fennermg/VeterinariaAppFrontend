import React from 'react';
import {useState} from 'react';
import '../../../src/index.css';
import ModalRoot from '../Modals/components/ModalRoot';
import ModalService from '../Modals/services/ModalService';
import Table, { SelectColumnFilter, StatusPill, clickeableCell} from '../Table/Table'
import { RiMenuFill, RiCloseLine, } from 'react-icons/ri';
import Sidebar from './Sidebar';
import Header from './Header';
import AddUser from '../Modals/AddUser';
import { fetchExistingUsers } from '../../Services/Services';

const getData = () => {
    const data = [
      fetchExistingUsers
    ]
    return [...data]
  }


export default function Users(){
    /**
    async function getData(e){
        await fetchExistingUsers(data).then(function(response){
            data = JSON.parse(data);
            console.log(data);
        })
    }*/

    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar);
    }

    const columns = React.useMemo(() => [
        {
          Header: "Usuario",
          accessor: 'username',
          Cell: clickeableCell,
        },
        {
          Header: "Rol",
          accessor: 'role',
        },

      ], [])
    
      const data = React.useMemo(() => getData(), [])

    const addModal = () => {
        ModalService.open(AddUser);
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
                        <h1 className='text-3xl font-semibold'>Usuarios</h1>
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