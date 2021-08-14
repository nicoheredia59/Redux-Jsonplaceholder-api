import axios from 'axios'

export const getPosts = async ()  =>  {
    const res =await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res.data
}

export const getUsers = async () => {
    const res = await axios.get( "https://jsonplaceholder.typicode.com/users")
    return res.data
}