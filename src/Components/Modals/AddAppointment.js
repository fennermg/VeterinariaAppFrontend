import React, {useState} from 'react';
import Modal from "../Modals/components/Modal";
import ModalBody from "../Modals/components/ModalBody";
import ModalService from '../Modals/services/ModalService';
import AddPatient from './AddPatient';
import ModalRoot from '../Modals/components/ModalRoot';
import 'flowbite';

const addModal = () => {
    ModalService.open(AddPatient);
};




export default function AddAppointment(props) {

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
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
                    <form className='space-y-6' action="#">
                        <div>
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
                            <label className='p-4 font-semibold'>
                                Fecha
                            </label>
                            <label className='p-4 font-semibold'>
                                Hora
                            </label>
                            <div class="relative" data-te-timepicker-init data-te-input-wrapper-init>
                            <input
                                type="text"
                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="form1" />
                            <label
                                for="form1"
                                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Select a time</label>
                            </div>
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