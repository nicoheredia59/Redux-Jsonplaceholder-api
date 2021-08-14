const initalState = {
    users:[],
    loading: false,
    error: null
}

export const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case "FETCH_USER_REQUEST":
            return{
                ...state,
                loading:true,
                error:null
            }
        case "FETCH_USER_SUCCESS" :
            return{
                ...state,
                loading:false,
                users:action.payload
            }
        case  "FETCH_USER_ERROR":
            return{
                ...state,
                loading:false,
                error: action.error,
                users:[]
            }
    
        default:
            return state
    }
}