import React, {useState} from 'react';
import '../../../src/index.css';
import ModalRoot from '../Modals/components/ModalRoot';
import ModalService from '../Modals/services/ModalService';
import AddPatient from '../Modals/AddPatient';
import Sidebar from './Sidebar';
import Header from './Header';
import { useEffect } from 'react';
import { deletePatient, getPatients } from '../../Services/Services';
import AddAppointment from '../Modals/AddAppointment';

export default function Patients(){

    const [patients, setPatients] = useState([]);
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [patientsPerPage] = useState(10);
    const [selectedPatientId, setSelectedResponsableId] = useState(null);
    const [reload, setReload] = useState(false);

    useEffect(()=>{
      getPatients().then(response => setPatients(response.data));
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
        const response = await deletePatient(id);
        setReload(true);  
      }catch(e){
        alert("Error al eliminar al paciente")
      }
    }

    function handleEdit(patient){
        try{
            addModal(patient);
        }catch(e){
            alert("Error al cargar al paciente")
        }
    }

    const filteredUsers = patients.filter(patient => patient.nombre.toLowerCase().includes(filter));

    const indexOfLastUser = currentPage * patientsPerPage;
    const indexOfFirstUser = indexOfLastUser - patientsPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const addModal = (patient) => {
        ModalService.open(AddPatient, patient);
    };

    const addModalCita = () => {
        ModalService.open(AddAppointment);
    };

    return(
        <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
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
                                                Nombre
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Raza
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Sexo
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Especie
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Color
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Castrado
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Responsable
                                            </th>
                                            <th className='py-3 px-4 text-gray-400 text-center text-xs font-medium uppercase tracking-wider'>
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white text-gray-600 text-sm devide-y devide-gray-200'>
                                        {currentUsers.map(patient => (
                                            <tr key={patient._id} className='border-b border-gray-200 hover:bg-gray-100 '>
                                                <td className='py-4 px-6 text-left whitespace-nowrap font-semibold'>{patient.nombre}</td>
                                                <td className='py-3 px-6 text-left'>{patient.raza}</td>
                                                <td className='py-3 px-6 text-left'>{patient.sexo}</td>
                                                <td className='py-3 px-6 text-left'>{patient.especie}</td>
                                                <td className='py-3 px-6 text-left'>{patient.color}</td>
                                                <td className='py-3 px-6 text-left'>{patient.castrado ? 'Si' : 'No'}</td>
                                                <td className='py-3 px-6 text-left'>{patient.responsable.nombre || ""}</td>
                                                <td className='py-3 px-4 text-left flex space-x-4'>
                                                  <button
                                                    className='bg-green-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
                                                    onClick={() => handleEdit(patient)} // Llamar a handleDelete con el índice correspondiente
                                                  >
                                                    Editar
                                                  </button>
                                                  <button
                                                    className='bg-green-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
                                                    onClick={addModalCita} // Llamar a handleDelete con el índice correspondiente
                                                  >
                                                    Cita
                                                  </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className='flex justify-center mt-4'>
                                    <nav>
                                        <ul className='flex items-center'>
                                            {Array(Math.ceil(filteredUsers.length / patientsPerPage)).fill().map((_,i)=>(
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