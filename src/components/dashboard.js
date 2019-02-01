import React from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'
import { fetchProtectedData, fetchAllQuestions } from '../actions/protected-data'
import Card from './card'
import Progress from './progress'

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData({}))
        this.props.dispatch(fetchAllQuestions())
    }

    render() {
        return (
            <div className='dashboard container col l8 m4 s12'>
                {/* <div className="dashboard-username">
                    Username: {this.props.username}
                </div> */}
                <div className='dashboard-name center-align'>Hello {this.props.name}!</div>
                <Progress />
                <Card protectedData={this.props.protectedData} />
                {/* <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth
    return ({
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        // is now question current ^^
    })
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard))
