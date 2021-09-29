import React, { Component } from 'react'


export default class BallTeamItems extends Component {
    render() {
        return (
            <div>
                <li>

                    <img src={this.props.img} alt={this.props.name} />
                    <br />
                    Name: {this.props.name}
                    <br />
                    City: {this.props.city}
                    <br />
                    Championships: {this.props.championships}
                    <br />
                    Conference: {this.props.conference}


                </li>
            </div>
        )
    }
}
