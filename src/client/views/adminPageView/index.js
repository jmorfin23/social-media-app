import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { fetchAdminsList } from '../../actions'; 
import RequireAuth from '../../components/hocs/requireAuth'; 
import { Helmet } from 'react-helmet-async'; 

class AdminPageView extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchAdminsList(); 
    }
    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        });
    }
    render() { 
        return(
            <div>
                <Helmet>
                    <title>{`${this.props.admins.length} Users Loaded!`}</title>
                </Helmet>
                <div>Admins View</div>

                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ admins }) => ({ admins }); 

export default {
    component: connect(mapStateToProps, { fetchAdminsList })(RequireAuth(AdminPageView)), 
    loadData: ({ dispatch }) => dispatch(fetchAdminsList())
}