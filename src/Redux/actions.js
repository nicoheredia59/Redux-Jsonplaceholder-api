import { getPosts, getUsers } from "./Services/Services"

export const fetchPosts  = () => async(dispatch, getState) => {
    dispatch({
        type:"FETCH_POSTS_REQUEST"
    })
    try {
            const resp = await getPosts()
            dispatch({
                type:"FETCH_POSTS_SUCCESS",
                payload: resp
            })
    } catch (error) {
        dispatch({
            type:"FETCH_POSTS_ERROR",
            error
        })
    }
}

export const fetchUsers = () => async(dispatch, getState) => {
    dispatch({
        type:"FETCH_USER_REQUEST"
    })
    try {
            const resp = await getUsers()
            dispatch({
                type:"FETCH_USER_SUCCESS",
                payload: resp
            })
    } catch (error) {
        dispatch({
            type:"FETCH_USER_ERROR",
            error
        })
    }
}