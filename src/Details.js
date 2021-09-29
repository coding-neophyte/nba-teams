import React, { Component } from 'react'
import request from 'superagent'
import TeamItem from './TeamItem'

export default class Details extends Component {
    state = {
        teams: []
    }

    componentDidMount = async () => {
        const response = await request.get(`https://db-lab-julius.herokuapp.com/basketball-teams/${this.props.params.id}`)
        this.setState({ teams: response.body })
    }
    render() {
        return (
            <div>
                <TeamItem {...this.state.teams} />
            </div>
        )
    }
}
