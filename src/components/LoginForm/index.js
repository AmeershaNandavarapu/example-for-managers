import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {userNameChange,passwordChange} from '../../redux/actionTypes'
function LoginForm(){
    const dispatch=useDispatch()
    const {username,password} =useSelector((state)=>({...state}))
    return(
        <div>
            <h1>Login form</h1>
            <div>
                <input type="text" placeholder="Username" value={username} onChange={(event)=>dispatch(userNameChange(event.target.value))}/>
                <input type="password" placeholder="Password" value={password} onChange={(event)=>dispatch(passwordChange(event.target.value))}/>
                <button>Login</button>
            </div>
        </div>
    )
}

export default LoginForm