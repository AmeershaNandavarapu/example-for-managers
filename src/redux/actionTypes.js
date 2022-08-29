import {USER_NAME,PASS_WORD} from './actions'

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