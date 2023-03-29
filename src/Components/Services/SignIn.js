import axios from 'axios';

export const fetchUserAPI = async (data) =>{
    return axios({
        method: 'POST',
        url: 'http://localhost:5000/api/user',
        body:{
            user: data.user,
            password: data.password
        },
        headers:{'Content-Type':'application/json'}
    })
}