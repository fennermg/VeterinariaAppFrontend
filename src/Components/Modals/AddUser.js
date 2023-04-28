import React, {useState} from 'react';
import Modal from "../Modals/components/Modal";
import ModalBody from "../Modals/components/ModalBody";
import ModalRoot from '../Modals/components/ModalRoot';
import { fetchUser } from "../../Services/Services";

export default function AddUser(props) {
    const [data, setdata] = useState({
        username: "",
        password: "",
        role: "",
      });
    
      const onChange = (e) => {
        setdata({
          ...data,
          [e.target.name]: e.target.value,
        });
      };
    
      async function submit(e) {
        e.preventDefault();
        if (data.username !== "" || data.password !== "" || data.role !== "") {
          await fetchUser(data).then(function (response) {
            if (response.status === 200) {
              //esto de abajo no funciona y no se porque
            } else if (response.status === 401 || response.status === 403) {
              alert("Usuario y Contraseña invalidos");
            } else {
              alert("Error desconocido");
            }
          });
        } else {
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
                    <h1 className='text-3xl font-semibold'>Agregar Usuario</h1>
                    <ModalRoot/>
                </div>
                <div className='bg-white py-6 px-6 lg:px-8 text-left'>
                    <form className='space-y-6' onSubmit={submit}>
                        <div>
                            <label className='p-4 font-semibold'>
                                Usuario
                            </label>
                            <input
                                type='text'
                                name='username'
                                id='username'
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                onChange={onChange}
                            >
                            </input>
                            <label className='p-4 font-semibold'>
                                Contraseña
                            </label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                onChange={onChange}
                            >
                            </input>
                            <label className='p-4 font-semibold'>
                                Rol
                            </label>
                            <input
                                type='text'
                                name='role'
                                id='role'
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                onChange={onChange}
                            >
                            </input>
                        </div>
                        <button  
                        type='submit'
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