import React, { Component } from 'react'

export default class TeamItem extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <img src={this.props.logo} alt={this.props.name} />
                        <br />
                        Name: {this.props.name}
                        <br />
                        City: {this.props.city}
                        <br />
                        Championships: {this.props.championships}
                        <br />
                        Conference: {this.props.conference}


                    </li>
                </ul>
            </div>
        )
    }
}
