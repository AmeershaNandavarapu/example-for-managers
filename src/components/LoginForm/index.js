import React from 'react'
import './index.css'
import {useSelector,useDispatch} from 'react-redux'
import {userNameChange,passwordChange,loggedIn} from '../../redux/actionTypes'
function LoginForm(){
    const dispatch=useDispatch()
    const {username,password} =useSelector((state)=>({...state}))
    return(
        <div>
            <h1>Login form</h1>
            <div className="form">
                <input type="text" placeholder="Username" value={username} onChange={(event)=>dispatch(userNameChange(event.target.value))} className="inputc"/>
                <input type="password" placeholder="Password" value={password} onChange={(event)=>dispatch(passwordChange(event.target.value))} className="inputc"/>
                <button onClick={()=>dispatch(loggedIn())}>Login</button>
            </div>
        </div>
    )
}

export default LoginForm