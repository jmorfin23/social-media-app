import React from 'react'; 
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';  

const Header = ({ auth }) => {
    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    ); 

    return(
        <nav>
            <h1>Header</h1>
            <div>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/admins">Admins</Link></li>
                <li>{authButton}</li>
            </div>
        </nav>
    )
}; 

const mapStateToProps = ({ auth }) => ({ auth }); 

export default connect(mapStateToProps)(Header); 