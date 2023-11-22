import axios from "axios";



export const getNinos = async() =>{
    await axios.get('https://b169-2806-2f0-91a1-850d-4dd5-4ea1-dff2-c37d.ngrok-free.app/ninoss');
}