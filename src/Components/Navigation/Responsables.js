import React from 'react';
import {useState} from 'react';
import '../../../src/index.css';
import AddResponsable from '../Modals/AddResponsable';
import ModalRoot from '../Modals/components/ModalRoot';
import ModalService from '../Modals/services/ModalService';
import Sidebar from './Sidebar';
import Header from './Header';
import { useEffect } from 'react';
import { getResponsable, deleteResponsable } from '../../Services/Services';

export default function Responsables(){

    const [responsable, setResponsable] = useState([]);
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [responsablePerPage] = useState(10);
    const [selectedPatientId, setSelectedPatientId] = useState({});
    const [reload, setReload] = useState(false);

    useEffect(()=>{
      getResponsable().then(response => setResponsable(response.data));
      setReload(false);
    },[reload])

    const handleFilterChange = (event) => {
      const value = event.target.value.toLowerCase();
      setFilter(value);
      setCurrentPage(1);
    }

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    }

    async function handleDelete(id){
        try{
            const response = await deleteResponsable(id);
            setReload(true);
        }catch(e){
            alert("Error al eliminar al responsable")
        }
    }

    const filteredUsers = responsable.filter(responsable => responsable.nombre.toLowerCase().includes(filter));

    const indexOfLastUser = currentPage * responsablePerPage;
    const indexOfFirstUser = indexOfLastUser - responsablePerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const addModal = () => {
        ModalService.open(AddResponsable);
      };

    return(
        <div className='max-h-screen grid grid-col-1 lg:grid-cols-6'>
            {/* Sidebar */}
            
            <Sidebar/>
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
                            <div className='mt-5'>
                                <input
                                    className='border rounded py-2 px-3 mb-4'
                                    type='text'
                                    placeholder='Filtrar por usuario'
                                    value={filter}
                                    onChange={handleFilterChange}
                                />
                            <table className='w-full shadow border-b rounded-md border-collapse table-auto'>
                                <thead className=''>
                                    <tr className='bg-gray-50 text-gray-600 uppercase text-sm leading-normal'>
                                        <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                            Nombre
                                        </th>
                                        <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                            Apellido
                                        </th>
                                        <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                            Cedula
                                        </th>
                                        <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                            Direccion
                                        </th>
                                        <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                            Telefono
                                        </th>
                                        <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Acciones
                                            </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white text-gray-600 text-sm devide-y devide-gray-200'>
                                        {currentUsers.map(responsable => (
                                            <tr key={responsable.nombre} className='border-b border-gray-200 hover:bg-gray-100 '>
                                                <td className='py-4 px-6 text-left whitespace-nowrap font-semibold'>{responsable.nombre}</td>
                                                <td className='py-3 px-6 text-left'>{responsable.apellido}</td>
                                                <td className='py-3 px-6 text-left'>{responsable.cedula}</td>
                                                <td className='py-3 px-6 text-left'>{responsable.direccion}</td>
                                                <td className='py-3 px-6 text-left'>{responsable.telefono}</td>
                                                <td className='py-3 px-6 text-left'>
                                                  <button
                                                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                                                    onClick={() => handleDelete(responsable._id)} // Llamar a handleDelete con el índice correspondiente
                                                  >
                                                    Borrar
                                                  </button>
                                                  <button
                                                    className='bg-red-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
                                                    onClick={() => handleDelete(responsable._id)} // Llamar a handleDelete con el índice correspondiente
                                                  >
                                                    Editar
                                                  </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>

                            </table>
                            <div className='flex justify-center mt-4'>
                                    <nav>
                                        <ul className='flex items-center'>
                                            {Array(Math.ceil(filteredUsers.length / responsablePerPage)).fill().map((_,i)=>(
                                                <li key={i}>
                                                    <button
                                                        className={`px-3 py-2 mx-1 rounded-md font-medium ${
                                                            currentPage === i+1
                                                            ? 'bg-gray-900 text-white'
                                                            : 'bg-white text-gray-900'
                                                        } hover:bg-gray-100 focus:outline-none`}
                                                        onClick={()=> handlePageChange(i+1)}
                                                    >
                                                        {i+1}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                        </div> 
                        </div>  
                    </div>   
                </div>
            </div>
        </div>   
    )
}