import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'; 


// Error handling for protected routes
// Handled by our server and browser 
export default (ChildComponent) => {
    class RequireAuth extends Component {
        render() {
            switch(this.props.auth) {
                case true: 
                    return <ChildComponent {...this.props}/>
                default: 
                    return <Redirect to="/login"/>
            }
        }
    }

    const mapStateToProps = state => (state.user); 
    return connect(mapStateToProps)(RequireAuth);
}; 