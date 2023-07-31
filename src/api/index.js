import axios from "axios"

const myAxios = axios.create({
    baseURL:'http://localhost:3001/api',
    timeout:1000
})

export const getData = async(link)=>{
    return (await myAxios.get(link)).data
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