import React, { useEffect } from 'react';
import {useState} from 'react';
import '../../../src/index.css';
import ModalRoot from '../Modals/components/ModalRoot';
import ModalService from '../Modals/services/ModalService';
import AddAppointment from '../Modals/AddAppointment';
import Table, { SelectColumnFilter, StatusPill, clickeableCell} from '../Table/Table'
import Sidebar from './Sidebar';
import Header from './Header';
import { deleteAppointment, getAppointments } from '../../Services/Services';

export default function Appointments(){

    const [appointments, setAppointments] = useState([]);
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [appointmentsPerPage] = useState(10);
    const [reload, setReload] = useState(false);

    useEffect(()=>{
      getAppointments().then(response => setAppointments(response.data));
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
        const response = await deleteAppointment(id);
        setReload(true);
      }catch(e){
        alert("Error al eliminar la cita")
      }
    }

    const filteredAppointments = appointments.filter(appointment => appointment.motivo.toLowerCase().includes(filter));
    const indexOfLastAppointment = currentPage * appointmentsPerPage;
    const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
    const currentAppointments = filteredAppointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

    const addModal = () => {
        ModalService.open(AddAppointment, setReload);
      };

    return(
        <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
            {/* Sidebar */}
            <Sidebar/>

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
                                <input
                                    className='border rounded py-2 px-3 mb-4'
                                    type='text'
                                    placeholder='Filtrar por usuario'
                                    value={filter}
                                    onChange={handleFilterChange}
                                />
                                <table className='w-full shadow border-b rounded-md border-collapse table-auto'>
                                    <thead>
                                        <tr className='bg-gray-50 text-gray-600 uppercase text-sm leading-normal'>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Motivo
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Fecha
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Hora
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Estado
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Tiempo estimado
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white text-gray-600 text-sm devide-y devide-gray-200'>
                                        {currentAppointments.map(appointment => (
                                            <tr key={appointment._id} className='border-b border-gray-200 hover:bg-gray-100 '>
                                                <td className='py-4 px-6 text-left whitespace-nowrap font-semibold'>{appointment.motivo}</td>
                                                <td className='py-3 px-6 text-left'>{appointment.fecha}</td>
                                                <td className='py-3 px-6 text-left'>{appointment.hora}</td>
                                                <td className='py-3 px-6 text-left'>{appointment.estado}</td>
                                                <td className='py-3 px-6 text-left'>{appointment.tiempoEst}</td>
                                                <td className='py-3 px-4 text-left flex space-x-4'>
                                                  <button
                                                    className='bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                                                    onClick={() => handleDelete(appointment._id)} // Llamar a handleDelete con el índice correspondiente
                                                  >
                                                    Borrar
                                                  </button>
                                                  <button
                                                    className='bg-green-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
                                                    onClick={() => handleDelete(appointment._id)} // Llamar a handleDelete con el índice correspondiente
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
                                            {Array(Math.ceil(filteredAppointments.length / appointmentsPerPage)).fill().map((_,i)=>(
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