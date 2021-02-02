import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { loginUser } from '../../actions'; 
import '../../app.css'; 
import './index.css'; 

export default props => {
    const dispatch = useDispatch(); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 

    const handleLogin = e => {
        e.preventDefault();     

        const userInfo = {
            username: username, 
            password: password
        }
        
        // Redux action
        dispatch(loginUser(userInfo, props.history)); 
    }

    return(
        <div className="centered">
            <div className="mt-2">
                <h1>Login</h1> 
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">Username</label>
                    <input name ="username" type="text" onChange={e => setUsername(e.target.value)} value={username} /> 

                    <label htmlFor="password">Password</label>
                    <input password="password" type="password" onChange={e => setPassword(e.target.value)} value={password} /> 
                    <button type="submit">Login</button>
                </form>
            </div>
            
        </div>
    )
};

