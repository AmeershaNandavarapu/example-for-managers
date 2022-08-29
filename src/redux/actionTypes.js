import {USER_NAME,PASS_WORD,LOGI_IN} from './actions'

export function userNameChange(value){
    return{
        type:USER_NAME,
        payload:value
    }
}

export function passwordChange(value){
    return{
        type:PASS_WORD,
        payload:value
    }
}

export function loggedIn(){
    return{
        type:LOGI_IN
    }
}