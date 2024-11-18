
import axios from 'axios'
// import { getToken } from '../services/auth'


const API = 'http://localhost:3001'

// const axiosInstance =axios.create({
//     baseURL:API,
    
// })

// axiosInstance.interceptors.request.use(
//     (config)=>{
//         const token=getToken()
//         if(token){
//             config.headers.Authorization=`${token}`
//         }
//         return config;
//     },
//     (error)=>{
//         return Promise.reject(error)
//     }
// )

// NewCarsEndPonts
const getNewCar = () => axios.get(`${API}/newcars/all`)
const getNewCarsCount = () => axios.get(`${API}/newcars/count`)
const addNewCar = (newcar) => axios.post(`${API}/newcars/add`, newcar)
const editNewCar = (newcar, id) => axios.put(`${API}/newcars/edit/${id}`, newcar)
const deleteNewCar = (id) => axios.delete(`${API}/newcars/delete/${id}`)


// UsedCarsEndPOints
const getUsedCar = () => axios.get(`${API}/usedcars/all`)
const getUsedCarsCount = () => axios.get(`${API}/usedcars/count`)
const addUsedCar = (usedcar) => axios.post(`${API}/usedcars/add`, usedcar)
const editUsedCar = (usedcar, id) => axios.put(`${API}/usedcars/edit/${id}`, usedcar)
const deleteUsedCar = (id) => axios.delete(`${API}/usedcars/delete/${id}`)



// OrderEndPonts
const getOrders = () => axios.get(`${API}/orders/all`)
const getOrdersCount = () => axios.get(`${API}/orders/count`)
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`)


// UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)
const getUsersCount = () => axios.get(`${API}/users/count`)
const addUsers = (user) => axios.post(`${API}/users/add`,user)
const editUsers = (user,id) => axios.put(`${API}/users/edit/${id}`,user)
const deleteUsers = (id) => axios.delete(`${API}/users/delete/${id}`)
const resetpasswordUsers =(id)=>axios.resetpassword(`${API}/users/resetpassword/${id}`)

//AuthEndponts
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)


// const getOrdersCount = () => axios.get(`${API}/orders/count`)

export { 
    getNewCar, 
    getOrders, 
    getUsers, 
    Login, 
    Register,
    addNewCar, 
    deleteNewCar, 
    editNewCar, 
    addUsers, 
    editUsers, 
    deleteUsers, 
    getUsersCount, 
    getNewCarsCount, 
    getOrdersCount,
    resetpasswordUsers,
    getUsedCar,
    addUsedCar,
    getUsedCarsCount,
    editUsedCar,
    deleteUsedCar,
    deleteOrder
 }