import React from 'react'; 
import './index.css'; 
import '../../app.css'; 
import { connect } from 'react-redux'; 
import { Link, NavLink } from 'react-router-dom';  

const Header = ({auth}) => {
    const authButton = auth ? (
        <a className="pad-1" href="/logout">Logout</a>
    ) : (
        <a className="pad-1" href="/login">Login</a>
    ); 

    return(
        <nav className="navbar fw-200">
            <div className="navbar-inner">
                {auth ? (
                    <>
                        <NavLink className="pad-1" activeClassName="active-class" exact to="/">Home</NavLink>
                        <NavLink className="pad-1" activeClassName="active-class" exact to="/logout">Logout</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink className="pad-1" activeClassName="active-class" exact to="/login">Login</NavLink>
                        <NavLink className="pad-1" activeClassName="active-class" exact to="/register">Sign Up</NavLink>
                    </>
                )
                }
            </div>
        </nav>
    )
}; 

const mapStateToProps = state => (state.user)

export default connect(mapStateToProps)(Header); 