import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../Redux/actions'
import './../App.css'

const Posts = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    console.log(state)

    const renderPosts = () => {
        if(state.loading){
            return <div className="spinner"></div>
        }
            return state.posts.posts.map((el, id) => {
                return  <div className="post" key={id}>
                            <h3>{el.title}</h3>
                            <p>#{el.id}</p>
                            <p>{el.body}</p>
                        </div>
            })
        }


    return (
        <div className="cont">
            {renderPosts()}
        </div>
    )
}

export default Posts
