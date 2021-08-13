const initalState={
    items :[],
    loading: false, 
    error: null
}

export const postReducer = (state= initalState, action) => {
    switch (action.type) {
        case "FETCH_POSTS_REQUEST":
                return {
                    ...state,
                    loading:true,
                    error: null
                }
        case "FETCH_POSTS_SUCCESS":
            return {
                ...state,
                loading:false,
                items: action.payload
            }
            case "FETCH_POSTS_ERROR":
        return {
            ...state,
            loading:false,
            error: action.null,
            items:[]
        }        
        default:
            return state
    }
}


