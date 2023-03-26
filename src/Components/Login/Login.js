import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

export default function Login(){

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const history = useNavigate();

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:5000/api/user",{
                user, password
            })
            .then(res=>{
                if(res.data = "Encontrado"){
                    history("/Dashboard")
                }
            })
        }catch(e){
            console.log(e);
        }
    }
    return(
        <div className='bg-white px-10 py-20 rounded-3xl boder-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Bienvenido de nuevo!</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Bienvenido, por favor ingresa tu información.</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Usuario</label>
                    <input
                        type ='text'
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingresa tu usuario'
                        onChange={(e)=>setUser(e.target.value)}
                    />
                </div>
                <div className='mt-2'>
                    <label className='text-lg font-medium'>Contraseña</label>
                    <input
                        type ='password'
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingresa tu contraseña'
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input
                            type="checkbox"
                            id='remember'
                        />
                        <label className='m-2 font-medium text-base' for="remember">Recuerda mi contraseña</label>
                    </div>
                    <button className='font-medium text-base text-violet-500'>Se me olvidó mi contraseña</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button onClick={submit}className='active:scale-[.98] active:duration-75 transition-all hover:scale-[.1.01] ease-in-out bg-violet-500 text-white text-lg font-bold py-3 rounded-xl'>Acceder</button>
                </div>
            </div>
        </div>
    )
}
