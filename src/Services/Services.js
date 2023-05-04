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

export const fetchPatient = async (data) =>{
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/paciente/',
        data: data,
        headers: {'Content-Type' : 'application/json'}
    })
}

export const fetchResponsable = async (data) =>{
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/responsable/',
        data: data,
        headers: {'Content-Type' : 'application/json'}
    })
}

export const fetchUser = async (data) =>{
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/user/',
        data: data,
        headers: {'Content-Type' : 'application/json'}
    })
}

export const fetchAppointment = async (data) =>{
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/cita/',
        data: data,
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

export const getPatient = async(id)=>{
    return axios({
        method: 'get',
        url: `http://localhost:5000/api/paciente/${id}`,
        headers: {'Content-Type' : 'application/json'}
    })

};

export const getResponsable = async()=>{
    /*const response = await axios('http://localhost:5000/api/user/');
    const data = await response.json();
    return data;*/

    return axios({
        method: 'get',
        url: 'http://localhost:5000/api/responsable/',
        headers: {'Content-Type' : 'application/json'}
    })

};

export const getAppointments = async()=>{
    return axios({
        method: 'get',
        url: 'http://localhost:5000/api/cita/',
        headers: {'Content-Type' : 'application/json'}
    })

};

export const getAppointment = async(id)=>{
    return axios({
        method: 'get',
        url: `http://localhost:5000/api/cita/${id}`,
        headers: {'Content-Type' : 'application/json'}
    })

};

export const logout = async()=>{
    /*const response = await axios('http://localhost:5000/api/user/');
    const data = await response.json();
    return data;*/

    return axios({
        method: 'get',
        url: 'http://localhost:5000/api/auth/logout',
        headers: {'Content-Type' : 'application/json'}
    })
};

export const deletePatient = async(id)=>{
    return axios({
        method: 'delete',
        url: `http://localhost:5000/api/paciente/${id}`,
        headers: {'Content-Type' : 'application/json'}
    })
};

export const deleteResponsable = async(id)=>{
    return axios({
        method: 'delete',
        url: `http://localhost:5000/api/responsable/${id}`,
        headers: {'Content-Type' : 'application/json'}
    })
};

export const deleteAppointment = async(id)=>{
    return axios({
        method: 'delete',
        url: `http://localhost:5000/api/Cita/${id}`,
        headers: {'Content-Type' : 'application/json'}
    })
};

export const deleteUser = async(id)=>{
    return axios({
        method: 'delete',
        url: `http://localhost:5000/api/user/${id}`,
        headers: {'Content-Type' : 'application/json'}
    })
};

export const updatePatien = async(data)=>{
    return axios({
        method: 'patch',
        data:data,
        url: `http://localhost:5000/api/paciente/${data._id}`,
        headers: {'Content-Type' : 'application/json'}
    })
};

export const updateResponsable = async(data)=>{
    return axios({
        method: 'patch',
        data:data,
        url: `http://localhost:5000/api/responsable/${data._id}`,
        headers: {'Content-Type' : 'application/json'}
    })
};

export const updateAppointment = async(data)=>{
    return axios({
        method: 'patch',
        data:data,
        url: `http://localhost:5000/api/cita/${data._id}`,
        headers: {'Content-Type' : 'application/json'}
    })
};