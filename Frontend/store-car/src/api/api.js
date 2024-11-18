
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

// // NewCarsEndPonts
// const getNewCar = () => axios.get(`${API}/newcars/all`)
// const getNewCarsCount = () => axios.get(`${API}/newcars/count`)
// const addNewCar = (newcar) => axios.post(`${API}/newcars/add`, newcar)
// const editNewCar = (newcar, id) => axios.put(`${API}/newcars/edit/${id}`, newcar)
// const deleteNewCar = (id) => axios.delete(`${API}/newcars/delete/${id}`)

// BenzCarsEndPonts
const getBenzCar = () => axios.get(`${API}/benzcars/all`)
const getBenzCarsCount = () => axios.get(`${API}/benzcars/count`)
const addBenzCar = (benzcar) => axios.post(`${API}/benzcars/add`, benzcar)
const editBenzCar = (benzcar, id) => axios.put(`${API}/benzcars/edit/${id}`, benzcar)
const deleteBenzCar = (id) => axios.delete(`${API}/benzcars/delete/${id}`)

// BMWCarsEndPonts
const getBMWCar = () => axios.get(`${API}/bmwcars/all`)
const getBMWCarsCount = () => axios.get(`${API}/bmwcars/count`)
const addBMWCar = (bmwcar) => axios.post(`${API}/bmwcars/add`, bmwcar)
const editBMWCar = (bmwcar, id) => axios.put(`${API}/bmwcars/edit/${id}`, bmwcar)
const deleteBMWCar = (id) => axios.delete(`${API}/bmwcars/delete/${id}`)

// HondaCarsEndPonts
const getHondaCar = () => axios.get(`${API}/hondacars/all`)
const getHondaCarsCount = () => axios.get(`${API}/hondacars/count`)
const addHondaCar = (hondacar) => axios.post(`${API}/hondacars/add`, hondacar)
const editHondaCar = (hondacar, id) => axios.put(`${API}/hondacars/edit/${id}`, hondacar)
const deleteHondaCar = (id) => axios.delete(`${API}/hondacars/delete/${id}`)

// ToyotaCarsEndPonts
const getToyotaCar = () => axios.get(`${API}/toyotacars/all`)
const getToyotaCarsCount = () => axios.get(`${API}/toyotacars/count`)
const addToyotaCar = (toyotacar) => axios.post(`${API}/toyotacars/add`, toyotacar)
const editToyotaCar = (toyotacar, id) => axios.put(`${API}/toyotacars/edit/${id}`, toyotacar)
const deleteToyotaCar = (id) => axios.delete(`${API}/toyotacars/delete/${id}`)

// VolkswagenCarsEndPonts
const getVolkswagenCar = () => axios.get(`${API}/volkswagencars/all`)
const getVolkswagenCarsCount = () => axios.get(`${API}/volkswagencars/count`)
const addVolkswagenCar = (volkswagencar) => axios.post(`${API}/volkswagencars/add`, volkswagencar)
const editVolkswagenCar = (volkswagencar, id) => axios.put(`${API}/volkswagencars/edit/${id}`, volkswagencar)
const deleteVolkswagenCar = (id) => axios.delete(`${API}/volkswagencars/delete/${id}`)

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



export { 
    // getNewCar, 
    getOrders, 
    getUsers, 
    Login, 
    Register,
    // addNewCar, 
    // deleteNewCar, 
    // editNewCar, 
    addUsers, 
    editUsers, 
    deleteUsers, 
    getUsersCount, 
    // getNewCarsCount, 
    getOrdersCount,
    resetpasswordUsers,
    getUsedCar,addUsedCar,getUsedCarsCount,editUsedCar,deleteUsedCar,
    deleteOrder,
    getBenzCar,addBenzCar,deleteBenzCar,editBenzCar,getBenzCarsCount,
    getBMWCar,addBMWCar,deleteBMWCar,editBMWCar,getBMWCarsCount,
    getHondaCar,addHondaCar,deleteHondaCar,editHondaCar,getHondaCarsCount,
    getToyotaCar,addToyotaCar,deleteToyotaCar,editToyotaCar,getToyotaCarsCount,
    getVolkswagenCar,addVolkswagenCar,deleteVolkswagenCar,editVolkswagenCar,getVolkswagenCarsCount
    // getBenzCarsCount
 }