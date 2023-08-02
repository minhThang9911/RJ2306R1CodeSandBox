import axios from "axios"




const myAxios = axios.create({
    // baseURL:'http://localhost:3001/api',
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout:1000
})

export const getData = async(link)=>{
    return await myAxios.get(link)
}

export const addData = async(link,data) => {
    return await myAxios.post(link,data)
}

export const editData = async(link,id,data) =>{
    return await myAxios.put(`${link}/${id}`,data)
}
export const deleteData = async(link,id) =>{
    return await myAxios.delete(`${link}/${id}`)
}

export const getUsers = async()=>{
    return (await axios.get('http://localhost:3001/api/users')).data
}

export const getComments = async()=>{
    return (await axios.get('http://localhost:3001/api/comments')).data
}

export const getPosts = async()=>{
    return (await axios.get('http://localhost:3001/api/posts')).data
}