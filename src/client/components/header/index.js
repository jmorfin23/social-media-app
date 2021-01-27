import React from 'react'; 
import './index.css'; 
import '../../app.css'; 
import { connect } from 'react-redux'; 
import { Link, NavLink } from 'react-router-dom';  

const Header = ({ auth }) => {
    const authButton = auth ? (
        <a className="pad-1" href="/api/logout">Logout</a>
    ) : (
        <a className="pad-1" href="/api/auth/google">Login</a>
    ); 

    return(
        <nav className="navbar fw-200">
            <div className="navbar-inner">
                <NavLink className="pad-1" activeClassName="active-class" exact to="/">Home</NavLink>
                <NavLink className="pad-1" activeClassName="active-class" to="/about">About</NavLink>
                <NavLink className="pad-1" activeClassName="active-class" to="/admins">Admins</NavLink> 
                {authButton}
            </div>
        </nav>
    )
}; 

const mapStateToProps = ({ auth }) => ({ auth }); 

export default connect(mapStateToProps)(Header); 