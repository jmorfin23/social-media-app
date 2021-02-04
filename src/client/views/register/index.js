import React, { Component } from 'react'; 
import '../../app.css'; 

// Redux
import { connect } from 'react-redux'; 
import { registerUser } from '../../actions'; 

class Register extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            email: '', 
            handle: '', 
            password: '',
            confirmPassword: '', 
            errors: ''
        }; 
    }

    componentDidUpdate(prevProps) {

        // Check previous errors with current errors
        if (this.props.UI.errors !== prevProps.UI.errors) {
            
            // Add errors to state 
            this.setState({ errors: this.props.UI.errors });
        }; 
    }

    handleRegister = e => {
        e.preventDefault();     
        
        const { email, handle, password, confirmPassword } = this.state;
        
        const userInfo = {
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
        const { email, handle, password, confirmPassword, errors } = this.state; 
        const { loading } = this.props.UI; 

        return(
            <div className="centered">
                <div className="mt-2 fw-200">
                    <h1>Register</h1> 
                    <form className="form" onSubmit={this.handleRegister}>
                        
                        {/*    Email   */}
                        <div className={`form-item mt-1 fw-400 ${errors.email ? 'form-error': ''}`}>
                            <label htmlFor="email">Email</label>
                            <input maxLength="50" className="pad-05" name ="email" type="text" onChange={e => this.handleChange(e)} value={email} /> 
                            {errors.email ? <p className="fs-09 fw-200">{errors.email}</p> : null}
                        </div>
    
                        {/*    Handle Input  */}
                        <div className={`form-item mt-1 fw-400 ${errors.handle ? 'form-error': ''}`}>
                            <label htmlFor="handle">Handle</label>
                            <input maxLength="40" className="pad-05" name ="handle" type="text" onChange={e => this.handleChange(e)} value={handle} /> 
                            {errors.handle ? <p className="fs-09 fw-200" >{errors.handle}</p> : null}
                        </div>
    
                        {/*    Password   */}
                        <div className={`form-item mt-1 fw-400 ${errors.password ? 'form-error': ''}`}>
                            <label htmlFor="password">Password</label>
                            <input maxLength="40" className="pad-05" name="password" password="password" type="password" onChange={e => this.handleChange(e)} value={password} /> 
                            {errors.password ? <p className="fs-09 fw-200" >{errors.password}</p> : null}
                        </div>
                        
                        {/*    Confirm Password   */}
                        <div className={`form-item mt-1 fw-400 ${errors.confirmPassword ? 'form-error': ''}`}>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input maxLength="40" className="pad-05" name="confirmPassword" password="confirmPassword" type="password" onChange={e => this.handleChange(e)} value={confirmPassword} />
                            {errors.confirmPassword ? <p className="fs-09 fw-200" >{errors.confirmPassword}</p> : null} 
                        </div>
                        
                        <button disabled={loading} className="btn pad-05 mt-05" type="submit">Register</button>
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
    

