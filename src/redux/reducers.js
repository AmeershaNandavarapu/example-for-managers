import { USER_NAME, PASS_WORD ,LOGI_IN} from "./actions";


const initialState={
    username:'',
    password:'',
    isLoggedIn:false
}


const reducers=(state=initialState ,action)=>{
    switch (action.type) {
        case USER_NAME:
            return{
                ...state,
                username: action.payload
            }
        case PASS_WORD:
            return{
                ...state,
                password: action.payload
            }
        case LOGI_IN:
            return{
                ...state,
                isLoggedIn:true
            }    
    
        default:
            return state;
    }
}

export default reducers