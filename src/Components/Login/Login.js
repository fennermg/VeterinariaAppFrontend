import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {fetchUserAPI} from '../Services/SignIn'

export default function Login(){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate();

    const data = {
        user: user,
        password: password
    }
    
    const notUserAlert = () =>{
        <div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
            <p>Something happened that you should know about.</p>
        </div>
    }

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:5000/api/user",{
                user, password
            })
            .then(res=>{
                if(res.data === "Encontrado"){
                    history("/Dashboard",{state:{id:user}})
                }else if(res.data === "Error"){
                    
                }
            }).catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }catch(e){
            console.log(e);
        }

        /*try{
            await fetchUserAPI(data,{
                data
            })
            .then(res=>{
                if(res.data === "Encontrado"){
                    history("/Dashboard",{state:{id:user}})
                }else if(res.data === "Error"){
                    alert("Nel perro")
                }
            }).catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }catch(e){
            console.log(e);
        }*/
    }

    

    return(
        <div className='bg-white px-10 py-20 rounded-3xl boder-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Bienvenido de nuevo!</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Bienvenido, por favor ingresa tu información.</p>
            <form>
                <div className='mt-8'>
                    <div>
                        <label className='text-lg font-medium'>Usuario</label>
                        <input
                            type ='text'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Ingresa tu usuario'
                            onChange={(e)=>setUser(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mt-2'>
                        <label className='text-lg font-medium'>Contraseña</label>
                        <input
                            type ='password'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Ingresa tu contraseña'
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mt-8 flex justify-between items-center'>
                        <div>
                            <input
                                type="checkbox"
                                id='remember'
                            />
                            <label className='m-2 font-medium text-base' htmlFor="remember">Recuerda mi contraseña</label>
                        </div>
                        <button className='font-medium text-base text-violet-500'>Se me olvidó mi contraseña</button>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button onClick={submit} className='active:scale-[.98] active:duration-75 transition-all hover:scale-[.1.01] ease-in-out bg-violet-500 text-white text-lg font-bold py-3 rounded-xl'>Acceder</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
