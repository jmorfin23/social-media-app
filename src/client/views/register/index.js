import React, { Component } from 'react'; 
import '../../app.css'; 

// Redux
import { connect } from 'react-redux'; 
import { registerUser } from '../../actions'; 

class Register extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            name: '', 
            email: '', 
            handle: '', 
            password: '',
            confirmPassword: ''
        }; 
    }

    handleRegister = e => {
        e.preventDefault();     
        
        const { name, email, handle, password, confirmPassword } = this.state;
        
        const userInfo = {
            name: name,
            email: email, 
            handle: handle, 
            password: password, 
            confirmPassword: confirmPassword
        }; 

        // Redux action
        this.props.registerUser(userInfo, this.props.history); 
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }); 
    }

    render() {
        const { name, email, handle, password, confirmPassword } = this.state; 
        return(
            <div className="centered">
                <div className="mt-2 fw-200">
                    <h1>Register</h1> 
                    <form className="form" onSubmit={this.handleRegister}>
    
                        {/*    Name   */}
                        <div className="form-item mt-05">
                            <label htmlFor="name">Name</label>
                            <input className="pad-05" name ="name" type="text" onChange={e => this.handleChange(e)} value={name} /> 
                        </div>
    
                        {/*    Email   */}
                        <div className="form-item mt-05">
                            <label htmlFor="email">Email</label>
                            <input className="pad-05" name ="email" type="text" onChange={e => this.handleChange(e)} value={email} /> 
                        </div>
    
                        {/*    Handle Input  */}
                        <div className="form-item mt-05">
                            <label htmlFor="handle">Handle</label>
                            <input className="pad-05" name ="handle" type="text" onChange={e => this.handleChange(e)} value={handle} /> 
                        </div>
    
                        {/*    Password   */}
                        <div className="form-item mt-05">
                            <label htmlFor="password">Password</label>
                            <input className="pad-05" name="password" password="password" type="password" onChange={e => this.handleChange(e)} value={password} /> 
                        </div>
                        
                        {/*    Confirm Password   */}
                        <div className="form-item mt-05">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input className="pad-05" name="confirmPassword" password="confirmPassword" type="password" onChange={e => this.handleChange(e)} value={confirmPassword} /> 
                        </div>
                        
                        <button className="pad-05 mt-05" type="submit">Register</button>
                    </form>
                </div>
                
            </div>
        )
    };
}

const mapStateToProps = state => ({
    UI: state.UI
}); 

export default connect(mapStateToProps, { registerUser })(Register); 
    

