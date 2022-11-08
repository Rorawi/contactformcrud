let initialState = {
    loggedInUsers: null
}

const authReducer =(state= initialState, action)=> {
    switch(action.type) {
        case "add_user":
        return {...state, loggedInUsers:action.payload}
        default : 
        return state
    }
}

export default authReducer
