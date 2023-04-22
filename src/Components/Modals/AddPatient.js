/*import React from 'react';

import {useState} from 'react';


const AddPatient = () => {
    return(
        <div className='fixed inset-0 bg-slate-600 bg-opacity-25 flex justify-center items-center'>
            <div className='top-0 right-0 w-[50vw] bg-white pl-2 fixed h-full ease-in-out duration-10000'>
                
                <div className='bg-white flex items-center justify-between'>
                    <button className='text-black p-5 text-xl place-self-end'>
                        X
                    </button>
                        Registra un Paciente
                    <button  
                    className='text-white justify-between bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                    
                    >
                        Agregar responsable
                    </button>
                </div>
                <div className='bg-white py-6 px-6 lg:px-8 text-left'>
                    <form className='space-y-6' action="#">
                        <div>
                            <label className='p-4'>
                                Nombre del paciente
                            </label>
                            <input
                            type='text'
                            name='nombre'
                            id='nombre'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4'>
                                Tipo
                            </label>
                            <input
                            type='text'
                            name='tipo'
                            id='tipo'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4' >
                                Raza
                            </label>
                            <input
                            type='text'
                            name='raza'
                            id='raza'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4'>
                                Sexo
                            </label>
                            <select className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                                <option
                                value='masculino'
                                name='masculino'
                                id='masculino'
                                
                                >
                                    Masculino
                                </option>  
                                <option
                                value="femenino"
                                name='femenino'
                                id='femenino'
                                
                                >
                                    Femenino
                                </option>
                            </select>
                            <label className='p-4'>
                                Color
                            </label>
                            <input
                            type='text'
                            name='color'
                            id='color'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4'>
                                Castrado
                            </label>
                            <select className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                                <option
                                value='Si'
                                name='si'
                                id='si'
                                
                                >
                                    Si
                                </option>  
                                <option
                                value="No"
                                name='no'
                                id='no'
                                
                                >
                                    No
                                </option>
                            </select>
                        </div>
                        <button  
                        className='text-white justify-between bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                        
                        >
                            Guardar
                        </button>
                        <button  
                        className='text-white justify-between bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                        
                        >
                            Cerrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPatient;*/

import Modal from "../Modals/components/Modal";
import ModalBody from "../Modals/components/ModalBody";
import ModalRoot from '../Modals/components/ModalRoot';
import ModalService from '../Modals/services/ModalService';
import AddResponsable from "./AddResponsable";

const addModal = () => {
    ModalService.open(AddResponsable);
  };

export default function AddPatient(props) {
  return (
    <Modal>
      <ModalBody>
      <div className='fixed inset-0 bg-slate-600 bg-opacity-25 flex justify-center items-center overflow-auto'>
            <div className='top-0 right-0 w-[50vw] bg-white pl-2 fixed h-full ease-in-out duration-10000 overflow-auto'>
                
                <div className='bg-white flex items-center justify-between'>
                    <button className='text-black p-5 text-xl place-self-end' onClick={ props.close }>
                        X
                    </button>
                    <h1 className='text-3xl font-semibold'>Agregar Paciente</h1>
                        
                        <ModalRoot/>
                    <button  
                    className='text-white justify-between bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                    onClick={addModal}
                    >
                        Agregar responsable
                    </button>
                </div>
                <div className='bg-white py-6 px-6 lg:px-8 text-left'>
                    <form className='space-y-6' action="#">
                        <div>
                            <label className='p-4 font-semibold'>
                                Nombre del paciente
                            </label>
                            <input
                            type='text'
                            name='nombre'
                            id='nombre'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4 font-semibold'>
                                Especie
                            </label>
                            <input
                            type='text'
                            name='tipo'
                            id='tipo'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4 font-semibold' >
                                Raza
                            </label>
                            <input
                            type='text'
                            name='raza'
                            id='raza'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4 font-semibold'>
                                Sexo
                            </label>
                            <select className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                                <option
                                value='masculino'
                                name='masculino'
                                id='masculino'
                                
                                >
                                    Macho
                                </option>  
                                <option
                                value="femenino"
                                name='femenino'
                                id='femenino'
                                
                                >
                                    Hembra
                                </option>
                            </select>
                            <label className='p-4 font-semibold'>
                                Color
                            </label>
                            <input
                            type='text'
                            name='color'
                            id='color'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4 font-semibold'>
                                Castrado
                            </label>
                            <select className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                                <option
                                value='Si'
                                name='si'
                                id='si'
                                
                                >
                                    Si
                                </option>  
                                <option
                                value="No"
                                name='no'
                                id='no'
                                
                                >
                                    No
                                </option>
                            </select>
                            <label className='p-4 font-semibold'>
                                Convive con mas animales?
                            </label>
                            <select className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                                <option
                                value='Si'
                                name='si'
                                id='si'
                                
                                >
                                    Si
                                </option>  
                                <option
                                value="No"
                                name='no'
                                id='no'
                                
                                >
                                    No
                                </option>
                            </select>
                            <label className='p-4 font-semibold'>
                                Convive con ninos?
                            </label>
                            <select className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                                <option
                                value='Si'
                                name='si'
                                id='si'
                                
                                >
                                    Si
                                </option>  
                                <option
                                value="No"
                                name='no'
                                id='no'
                                
                                >
                                    No
                                </option>
                            </select>
                            <label className='p-4 font-semibold'>
                                Convive con ancianos?
                            </label>
                            <select className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                                <option
                                value='Si'
                                name='si'
                                id='si'
                                
                                >
                                    Si
                                </option>  
                                <option
                                value="No"
                                name='no'
                                id='no'
                                
                                >
                                    No
                                </option>
                            </select>
                            <label className='p-4 font-semibold'>
                                Estado
                            </label>
                            <select className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                                <option
                                value='Si'
                                name='si'
                                id='si'
                                
                                >
                                    Activo
                                </option>  
                                <option
                                value="No"
                                name='no'
                                id='no'
                                
                                >
                                    Inactivo
                                </option>
                            </select>
                        </div>
                        <button  
                        className='text-white justify-between bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                        
                        >
                            Guardar
                        </button>
                        <button  
                        className='text-white justify-between bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                        onClick={ props.close }
                        >
                            Cerrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </ModalBody>
    </Modal>
  );
}


