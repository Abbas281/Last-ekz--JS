import { getUser } from "./dom.js"





const getData=async()=>{
    try {
        const {data} = await axios.get(`https://63d0e533120b32bbe8eca000.mockapi.io/user`)
    getUser(data)
    } catch (error) {
        
    }
}



const deleteUser=async(id)=>{
    try {
        const {data}=await axios.delete(`https://63d0e533120b32bbe8eca000.mockapi.io/user/${id}`)
    getData()
    } catch (error) {
        
    }
}


const editUser=async(id,user)=>{
    try {
        const {data}=await axios.put(`https://63d0e533120b32bbe8eca000.mockapi.io/user/${id}`,user)
    getData()
    } catch (error) {
        
    }
}


const addUser = async (editUser) => {
    try {
    const { data } = await axios.post(`https://63d0e533120b32bbe8eca000.mockapi.io/user`,editUser)
    getData()
    } catch (error) {
    }
    }
    


export {getData,deleteUser,editUser,addUser}