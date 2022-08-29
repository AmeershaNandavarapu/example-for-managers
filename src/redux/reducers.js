import { USER_NAME, PASS_WORD } from "./actions";


const initialState={
    username:'',
    password:'',
    isLoggedIn:false
}


const reducer=(state,action)=>{
    switch (action.type) {
        case USER_NAME:
            return{
                ...state,
                username:state.username + action.payload
            }
        case PASS_WORD:
            return{
                ...state,
                password:state.password+ action.payload
            }
    
        default:
            return state;
    }
}

export default reducer