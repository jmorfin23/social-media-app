import React, { useState } from 'react'; 
import '../../app.css'; 

// Redux
import { useDispatch } from 'react-redux'; 
import { useSelector } from "react-redux";
import { loginUser } from '../../actions'; 

export default props => {
    const dispatch = useDispatch(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const UI = useSelector(state => state.UI);

    const handleLogin = e => {
        e.preventDefault();     

        const userInfo = {
            email: email, 
            password: password
        }
        
        // Redux action
        dispatch(loginUser(userInfo, props.history)); 
    }

    const { loading, errors } = UI; 
    
    return(
        <div className="centered">
            <div className="mt-2 fw-200">
                <h1>Login</h1> 
                <form className="form" onSubmit={handleLogin}>
                    <div className="form-item mt-05">
                        <label htmlFor="email">Email</label>
                        <input className="pad-05" name ="email" type="text" onChange={e => setEmail(e.target.value)} value={email} /> 
                    </div>
                    
                    <div className="form-item mt-05">
                        <label htmlFor="password">Password</label>
                        <input className="pad-05" password="password" type="password" onChange={e => setPassword(e.target.value)} value={password} /> 
                    </div>
                    
                    <button disabled={loading} className="pad-05 mt-05" type="submit">Login</button>
                </form>
            </div>
            
        </div>
    )
};

