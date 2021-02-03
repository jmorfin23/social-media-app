import React, { Component } from 'react'; 
import '../../app.css'; 

// Redux
import { connect } from 'react-redux'; 
import { loginUser } from '../../actions'; 

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '', 
            password: '', 
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

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }); 
    }

    handleLogin = e => {
        e.preventDefault();     

        const userInfo = {
            email: this.state.email, 
            password: this.state.password
        };

        // Redux action
        this.props.loginUser(userInfo, this.props.history); 
    }

    render() {
        const { loading } = this.props.UI; 
        const { errors } = this.state; 
        return(
            <div className="centered">
                <div className="mt-2">
                    <h1>Login</h1> 
                    <form className="form" onSubmit={this.handleLogin}>
                        <div className={`form-item mt-1 fw-400 ${errors.email ? 'form-error': ''}`}>
                            <label htmlFor="email">Email</label>
                            <input maxLength="40" placeholder="Email..." className="pad-05 mtb-05" name ="email" type="text" onChange={e => this.handleChange(e)} value={this.state.email} /> 
                            {errors.email ? <p className="fs-09 fw-200">{errors.email}</p> : null}
                        </div>
                        
                        <div className={`form-item mt-1 fw-400 ${errors.password ? 'form-error': ''}`}>
                            <label htmlFor="password">Password</label>
                            <input maxLength="40" placeholder="Password..." className="pad-05 mtb-05" name="password" password="password" type="password" onChange={e => this.handleChange(e)} value={this.state.password} /> 
                            {errors.password ? <p className="fs-09 fw-200" >{errors.password}</p> : null}
                        </div>

                        <button disabled={loading} className="btn pad-05 mt-1 fs-1" type="submit">Login</button>

                        <div className={`mt-1 fw-400 ${errors.general ? 'form-error': ''}`}>
                            {errors.general ? <p className="fs-1 fw-200">{errors.general}</p> : null} 
                        </div>
                        
                    </form>
                </div>
                
            </div>
        )
    }
};

const mapStateToProps = state => ({
    UI: state.UI
}); 

export default connect(mapStateToProps , { loginUser })(Login);