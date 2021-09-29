import React, { Component } from 'react'
import request from 'superagent'
import TeamList from './TeamList'
import './App.css'

export default class Home extends Component {
    state = {
        teams: []
    }
    componentDidMount = async () => {
        const response = await request.get(`https://db-lab-julius.herokuapp.com/basketball-teams/`)
        this.setState({ teams: response.body })
    }
    render() {
        return (
            <div>
                <TeamList basketballArray={this.state.teams} />
            </div>
        )
    }
}
