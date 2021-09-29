import React, { Component } from 'react'
import BallTeamItems from './BallTeamItems'

export default class TeamList extends Component {
    render() {
        return (
            <div>
                {this.props.basketballArray.map((team) => <BallTeamItems key={team.teams} img={team.logo} name={team.name} city={team.city} championships={team.championships} conference={team.conference} />)}
            </div>
        )

    }
}
