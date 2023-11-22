import axios from "axios";



export const senData = async(user = "", password ="") =>{

    const data = {
        "user":user,
        "password":password
    }

    await axios.post('http://localhost:4000', data)
}