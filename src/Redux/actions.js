import axios from "axios"

export const fetchPosts  = () => async(dispatch, getState) => {
    dispatch({
        type:"FETCH_POSTS_REQUEST"
    })
    try {
            const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch({
                type:"FETCH_POSTS_SUCCESS",
                payload: resp.data
            })
    } catch (error) {
        dispatch({
            type:"FETCH_POSTS_ERROR",
            error
        })
    }
}

const users = "https://jsonplaceholder.typicode.com/users"