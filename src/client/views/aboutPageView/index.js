import React, { Component } from 'react'; 
import { Helmet } from 'react-helmet-async'; 
import { connect } from 'react-redux'; 
import { fetchUsers } from '../../actions'; 

class AboutPage extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            users: [] 
        }
    }
    componentDidMount() {
        // Grab user data if we don't have 
        // if (!this.props.users || !this.props.users.length) {
            this.props.fetchUsers(); 
        // }
    }
    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        });
    }

    render() {
        return(
            <div className="aboutpage">
                <Helmet>
                    <title>About page</title>
                    <meta property="og:title" content="about page bla bla bla."/> 
                </Helmet>
                <h1>About page</h1>
                <div>here is a list of users:</div>
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ users: state.users }); 

export default connect(mapStateToProps, { fetchUsers })(AboutPage); 
