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
