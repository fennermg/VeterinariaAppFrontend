import axios from "axios";

export const fetchAPi = async (data) =>{
    const {username,password} = data
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/auth/login',
        data: {
            username: username,
            password:password
        },
        headers: {'Content-Type' : 'application/json'}
    })
}

export const fetchUser = async (data) =>{
    const {username, password, role} = data
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/user/',
        data: {
            username: username,
            password:password,
            role: role
        },
        headers: {'Content-Type' : 'application/json'}
    })
}

export const getUsers = async()=>{
    /*const response = await axios('http://localhost:5000/api/user/');
    const data = await response.json();
    return data;*/

    return axios({
        method: 'get',
        url: 'http://localhost:5000/api/user/',
        headers: {'Content-Type' : 'application/json'}
    })

};

export const getPatients = async()=>{
    /*const response = await axios('http://localhost:5000/api/user/');
    const data = await response.json();
    return data;*/

    return axios({
        method: 'get',
        url: 'http://localhost:5000/api/paciente/',
        headers: {'Content-Type' : 'application/json'}
    })

};
