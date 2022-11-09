import React, { Component, useState } from 'react';

export default class ChildInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: ["Lokesh", "Chandu", "Sai", "Hari"]
        }

    }
    render() {
        return (
            <div>
                <button onClick={() => { this.props.receiveData(this.state.users) }}>Send Users</button>
            </div>
        )
    }
}