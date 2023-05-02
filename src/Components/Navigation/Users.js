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
import { fetchUser, getUsers } from '../../Services/Services';
import { useEffect } from 'react';
import axios from 'axios';

export default function Users(){

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    useEffect(()=>{
        getUsers().then(response => setUsers(response.data));
    },[]);

    const handleFilterChange = (event) => {
        const value = event.target.value.toLowerCase();
        setFilter(value);
        setCurrentPage(1);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const filteredUsers = users.filter(user => user.username.toLowerCase().includes(filter));

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const addModal = () => {
        ModalService.open(AddUser);
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
                                                Usuario
                                            </th>
                                            <th className='py-3 px-6 text-gray-400 text-left text-xs font-medium uppercase tracking-wider'>
                                                Rol
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white text-gray-600 text-sm devide-y devide-gray-200'>
                                        {currentUsers.map(user => (
                                            <tr key={user.username} className='border-b border-gray-200 hover:bg-gray-100 '>
                                                <td className='py-4 px-6 text-left whitespace-nowrap font-semibold'>{user.username}</td>
                                                <td className='py-3 px-6 text-left'>{user.role}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className='flex justify-center mt-4'>
                                    <nav>
                                        <ul className='flex items-center'>
                                            {Array(Math.ceil(filteredUsers.length / usersPerPage)).fill().map((_,i)=>(
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