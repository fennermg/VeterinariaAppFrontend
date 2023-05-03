import React, { useEffect, useState } from 'react';
import Modal from "../Modals/components/Modal";
import ModalBody from "../Modals/components/ModalBody";
import ModalService from '../Modals/services/ModalService';
import AddPatient from './AddPatient';
import ModalRoot from '../Modals/components/ModalRoot';
import {getPatients, fetchResponsable} from '../../Services/Services';

const addModal = () => {
    ModalService.open(AddPatient);
};

export default function AddResponsable(props) {

    const [data, setData] = useState({});
    const [pacientes, setPacientes] = useState([]);
    const [selectedPaciente, setSelectedPaciente] = useState({});

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
            paciente: selectedPaciente,
        });
        console.log(data);
    }

    useEffect(()=>{
        getPatients().then(response => setPacientes(response.data));
        console.log(pacientes);
    },[])

    async function submit(e){
        e.preventDefault();
        if(data.nombre !== ""){
            await fetchResponsable(data).then(function(response){
                if(response.status === 200){
                    props.close();
                    props.setReload(true);
                }else if(response.status === 401 || response.status === 403){
                    alert("Hay un error con el nombre");
                }else{
                    alert("Error desconocido");
                }
            });
        }else{
            alert("Todos los campos son obligatorios");
        }
    }
  return (
    <Modal>
      <ModalBody>
      <div className='fixed inset-0 bg-slate-600 bg-opacity-25 flex justify-center items-center'>
            <div className='top-0 right-0 w-[50vw] bg-white pl-2 fixed h-full ease-in-out duration-10000'>
                
                <div className='bg-white flex items-center justify-between'>
                <button className='text-black p-5 text-xl place-self-end' onClick={ props.close }>
                        X
                    </button>
                    <h1 className='text-3xl font-semibold'>Agregar Responsable</h1>
                        
                        <ModalRoot/>
                    <button  
                    className='text-white justify-between bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                    onClick={addModal}
                    >
                        Agregar Paciente
                    </button>
                </div>
                <div className='bg-white py-6 px-6 lg:px-8 text-left'>
                    <form className='space-y-6' onSubmit={submit}>
                        <div>
                            <label className='p-4 font-semibold'>
                                Nombre del responsable
                            </label>
                            <input
                            type='text'
                            name='nombre'
                            id='nombre'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            onChange={onChange}
                            >
                            </input>
                            <label className='p-4 font-semibold'>
                                Apellido del responsable
                            </label>
                            <input
                            type='text'
                            name='primer_nombre'
                            id='primer_nombre'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4 font-semibold'>
                                Cedula
                            </label>
                            <input
                            type='text'
                            name='primer_nombre'
                            id='primer_nombre'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4 font-semibold'>
                                Direccion
                            </label>
                            <input
                            type='text'
                            name='primer_nombre'
                            id='primer_nombre'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4 font-semibold'>
                                Telefono
                            </label>
                            <input
                            type='text'
                            name='primer_nombre'
                            id='primer_nombre'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            >
                            </input>
                            <label className='p-4 font-semibold'>
                                Paciente
                            </label>
                            <select className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                                <option
                                value='masculino'
                                name='masculino'
                                id='masculino'
                                
                                >
                                    Luna Herrera
                                </option>  
                                <option
                                value="femenino"
                                name='femenino'
                                id='femenino'
                                
                                >
                                    Hembra
                                </option>
                            </select>
                        </div>
                        <button  
                        className='text-white justify-between bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                        type = 'submit'
                        >
                            Guardar
                        </button>
                        <button  
                        className='text-white justify-between bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                        onClick={props.close}
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