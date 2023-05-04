import React, {useState} from 'react';
import Modal from "../Modals/components/Modal";
import ModalBody from "../Modals/components/ModalBody";
import ModalService from '../Modals/services/ModalService';
import AddPatient from './AddPatient';
import ModalRoot from '../Modals/components/ModalRoot';
import 'flowbite';
import { useEffect } from 'react';
import { fetchAppointment, getAppointment, getAppointments, getPatient, updateAppointment, getResponsable, getPatients } from '../../Services/Services';

const addModal = () => {
    ModalService.open(AddPatient);
};

export default function AddAppointment(props) {

    const [data, setData] = useState({
        paciente:{id:""},
        fecha:"2023-01-01",
        hora:'12:00',
        estado: 'Activo',
        tiempoEst: 1});
    const [patients, setPatients] = useState([]);

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(()=>{
        console.log(data);
    },[data])

    useEffect(() => {
        if(props._id){
            getAppointment(props._id).then(response => {
                setData(response.data)
            })
        }
        getPatients().then(response => setPatients(response.data));
    },[])

    async function submit(e){
        e.preventDefault();

        try {
            if(props._id){
                if(data.motivo !== ""){
                    console.log(data)
                    await updateAppointment(data).then(function (response){
                        if(response.status === 200){
                            props.close();
                        }else if (response.status === 401 || response.status === 403){
                            alert("Hay un error")
                        }else{
                            alert("Error desconocido")
                        }
                    });
                }else{
                    alert("Todos los campos son obligatorios")
                }
            }else{
                if(data.motivo !== ""){
                    console.log(data)
                    await fetchAppointment(data).then(function (response){
                        if(response.status === 200){
                            props.close();
                        }else if (response.status === 401 || response.status === 403){
                            alert("Hay un error")
                        }else{
                            alert("Error desconocido")
                        }
                    });
                }else{
                    alert("Todos los campos son obligatorios")
                }
            }
            
        } catch (error) {
            console.log(error)
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
                    <h1 className='text-3xl font-semibold'>Agregar Cita</h1>
                        
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
                                        Motivo
                                    </label>
                                    <input
                                        type='text'
                                        name='motivo'
                                        id='motivo'
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        onChange={onChange}
                                        value={data.motivo}
                                    >
                                    </input>
                                    <label className='p-4 font-semibold'>
                                        Fecha de Cita
                                    </label>
                                    <input
                                        type='date'
                                        name='fecha'
                                        id='fecha'
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        value={data.fecha.substr(0, 10)}
                                        onChange={onChange}
                                    >
                                    </input>
                                    <label className='p-4 font-semibold'>
                                        Hora de Cita
                                    </label>
                                    <input
                                        type='time'
                                        name='hora'
                                        id='hora'
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        value={data.hora}
                                        onChange={onChange}
                                    >
                                    </input>
                                    <label className='p-4 font-semibold'>
                                        Estado
                                    </label>
                                    <select name='estado' value={data.estado} className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={onChange}>
                                        <option
                                            value='Activo'
                                            name='si'
                                            id='si'

                                        >
                                            Activo
                                        </option>
                                        <option
                                            value='Inactivo'
                                            name='no'
                                            id='no'

                                        >
                                            Inactivo
                                        </option>
                                    </select>
                                <label className='p-4 font-semibold'>
                                    Paciente
                                </label> 
                                <select name='paciente' value={data.paciente._id} onChange={onChange} className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                                        {patients.map(paciente => (
                                            <option
                                                key={paciente._id}
                                                value={paciente._id}
                                                name='paciente'
                                                id={paciente._id}
                                            >
                                                {paciente.nombre}
                                            </option>
                                        ))}
                                    </select>
                                    <label className='p-4 font-semibold'>
                                        Tiempo Estimado
                                    </label>
                                    <input
                                        type='number'
                                        name='tiempoEst'
                                        id='tiempoEst'
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        onChange={onChange}
                                        value={data.tiempoEst}
                                    >
                                    </input>
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
      </ModalBody>
    </Modal>
  );
}