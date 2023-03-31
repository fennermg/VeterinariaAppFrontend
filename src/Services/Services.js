import axios from "axios";

export const fetchAPi = async (data) =>{
    const {user,password} = data
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/user',
        data: {
            user: user,
            password:password
        },
        headers: {'Content-Type' : 'application/json'}
    })
}
