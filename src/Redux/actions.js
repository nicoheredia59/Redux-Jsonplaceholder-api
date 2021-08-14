import { getPosts } from "./Services/Services"

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
