import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../Redux/actions'

const Users = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    
    useEffect(() => {
        dispatch(fetchUsers())
    },[])

    const renderUsers = () => {
        if(state.loading){
            return <div className="spinner"></div>
        }
        return state.users.users.map((el, id) => {
            return <div className="post" key={id}>
            <p>{el.name}</p>
        </div>
        })
    }
    return (
        <div>
            {renderUsers()}
        </div>
    )
}

export default Users
