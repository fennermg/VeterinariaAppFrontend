import React, { useState } from 'react';
import Modal from "../Modals/components/Modal";
import ModalBody from "../Modals/components/ModalBody";
import ModalRoot from '../Modals/components/ModalRoot';
import ModalService from '../Modals/services/ModalService';
import AddResponsable from "./AddResponsable";
import { fetchPatient, getResponsable, updatePatien, getPatient } from '../../Services/Services';
import { useEffect } from 'react';

const addModal = () => {
    ModalService.open(AddResponsable);
};

export default function AddPatient(props) {

    const [data, setData] = useState({});
    const [responsables, setResponsables] = useState([]);
    const [selectedResponsable, setSelectedResponsable] = useState({});

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
            responsable: selectedResponsable,
        });
        console.log(data);
    };

    useEffect(() => {
        if (props._id) {
            getPatient(props._id).then(response =>{
                setData(response.data)
                setSelectedResponsable(response.data.responsable)
            })
            console.log(data)
        }
        getResponsable().then(response => setResponsables(response.data));
    }, [])

    function onChangeResponsable(e) {
        setSelectedResponsable(e.target.value);
        console.log(selectedResponsable)
    }

    async function submit(e) {
        e.preventDefault();
        if (props._id) {
            if (data.nombre !== "") {
                console.log(data)
                await updatePatien(data).then(function (response) {
                    if (response.status === 200) {
                        props.close();
                    } else if (response.status === 401 || response.status === 403) {
                        alert("Hay un error");
                    } else {
                        alert("Error desconocido");
                    }
                });
            } else {
                alert("Todos los campos son obligatorios");
            }
        }else{
            if (data.nombre !== "") {
                await fetchPatient(data).then(function (response) {
                    if (response.status === 200) {
                        props.close();
                    } else if (response.status === 401 || response.status === 403) {
                        alert("Hay un error con el nombre");
                    } else {
                        alert("Error desconocido");
                    }
                });
            } else {
                alert("Todos los campos son obligatorios");
            }
        }

    }
    return (
        <Modal>
            <ModalBody>
                <div className='fixed inset-0 bg-slate-600 bg-opacity-25 flex justify-center items-center overflow-auto'>
                    <div className='top-0 right-0 w-[50vw] bg-white pl-2 fixed h-full ease-in-out duration-10000 overflow-auto'>
                        {/* Modal Header */}
                        <div className='bg-white flex items-center justify-between'>
                            <button className='text-black p-5 text-xl place-self-end' onClick={props.close}>
                                X
                            </button>
                            <h1 className='text-3xl font-semibold'>Agregar Paciente</h1>

                            <ModalRoot />
                            <button
                                className='text-white justify-between bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                                onClick={addModal}
                            >
                                Agregar responsable
                            </button>
                        </div>
                        {/* Modal Content */}
                        <div className='bg-white py-6 px-6 lg:px-8 text-left'>
                            <form className='space-y-6' onSubmit={submit}>
                                <div>
                                    <label className='p-4 font-semibold'>
                                        Nombre del paciente
                                    </label>
                                    <input
                                        type='text'
                                        name='nombre'
                                        id='nombre'
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        onChange={onChange}
                                        value={data.nombre}
                                    >
                                    </input>
                                    <label className='p-4 font-semibold'>
                                        Especie
                                    </label>
                                    <input
                                        type='text'
                                        name='especie'
                                        id='especie'
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        onChange={onChange}
                                        value={data.especie}
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
                                        onChange={onChange}
                                        value={data.raza}
                                    >
                                    </input>
                                    <label className='p-4 font-semibold'>
                                        Responsable
                                    </label>
                                    <select name='responsable' value={selectedResponsable} onChange={onChangeResponsable} className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'>
                                        {responsables.map(responsable => (
                                            <option
                                                key={responsable._id}
                                                value={responsable._id}
                                                name='responsable'
                                                id={responsable._id}
                                            >
                                                {responsable.nombre}
                                            </option>
                                        ))}
                                    </select>
                                    <label className='p-4 font-semibold'>
                                        Sexo
                                    </label>
                                    <select name='sexo' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={onChange}>
                                        <option
                                            value='Masculino'
                                            name='masculino'
                                            id='masculino'
                                            
                                        >
                                            Macho
                                        </option>
                                        <option
                                            value='Femenino'
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
                                        value={data.color}
                                        onChange={onChange}
                                    >
                                    </input>
                                    <label className='p-4 font-semibold'>
                                        Castrado
                                    </label>
                                    <select name='castrado' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={onChange}>
                                        <option
                                            value={true}
                                            name='si'
                                            id='si'

                                        >
                                            Si
                                        </option>
                                        <option
                                            value={false}
                                            name='no'
                                            id='no'

                                        >
                                            No
                                        </option>
                                    </select>
                                    <label className='p-4 font-semibold'>
                                        Numero de Tarjeta
                                    </label>
                                    <input
                                        type='text'
                                        name='numeroTarjeta'
                                        id='numeroTarjeta'
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        value={data.numeroTarjeta}
                                        onChange={onChange}
                                    >
                                    </input>
                                    <label className='p-4 font-semibold'>
                                        Fecha de Nacimiento
                                    </label>
                                    <input
                                        type='date'
                                        name='fechaNacimiento'
                                        id='fechaNacimiento'
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        value={data.fechaNacimiento}
                                        onChange={onChange}
                                    >
                                    </input>
                                    <label className='p-4 font-semibold'>
                                        Convive con mas animales?
                                    </label>
                                    <select name = 'conviveOtros' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={onChange}>
                                        <option
                                            value={true}
                                            name='si'
                                            id='si'

                                        >
                                            Si
                                        </option>
                                        <option
                                            value={false}
                                            name='no'
                                            id='no'

                                        >
                                            No
                                        </option>
                                    </select>
                                    <label className='p-4 font-semibold'>
                                        Convive con ninos?
                                    </label>
                                    <select name='conviveNinos' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={onChange}>
                                        <option
                                            value={true}
                                            name='si'
                                            id='si'

                                        >
                                            Si
                                        </option>
                                        <option
                                            value={false}
                                            name='no'
                                            id='no'

                                        >
                                            No
                                        </option>
                                    </select>
                                    <label className='p-4 font-semibold'>
                                        Convive con ancianos?
                                    </label>
                                    <select name='conviveAncianos' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={onChange}>
                                        <option
                                            value={true}
                                            name='si'
                                            id='si'

                                        >
                                            Si
                                        </option>
                                        <option
                                            value={false}
                                            name='no'
                                            id='no'

                                        >
                                            No
                                        </option>
                                    </select>
                                    <label className='p-4 font-semibold'>
                                        Estado
                                    </label>
                                    <select name='estado' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' onChange={onChange}>
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
                                </div>
                                <button
                                    className='text-white justify-between bg-purple-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                                    type='submit'
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


