import React from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'
import { fetchProtectedData } from '../actions/protected-data'
import Card from './card'

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData(null))
    }

    render() {
        return (
            <div className='dashboard'>
                {/* <div className="dashboard-username">
                    Username: {this.props.username}
                </div> */}
                <div className='dashboard-name'>Hello {this.props.name}!</div>
                <Card protectedData={this.props.protectedData.data} />
                {/* <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        // is now question 1 ^^
    }
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard))
