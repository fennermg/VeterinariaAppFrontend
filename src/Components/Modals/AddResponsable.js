import React from 'react';
import {useState} from 'react';


const AddResponsable = ({ isVisible, onClose }) => {
    if(!isVisible) return null;

    return(
        <div className='fixed inset-0 bg-slate-600 bg-opacity-25 flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                
                <div className='bg-white flex items-center justify-between'>
                    <button className='text-black p-5 text-xl place-self-end' onClick={()=>onClose()}>
                        X
                    </button>
                        Registra un Responsable
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddResponsable;