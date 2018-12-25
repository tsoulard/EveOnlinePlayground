import React, { Component } from 'react'

export class Login extends Component {
    displayName = Login.name

    createLoginUrl() {
        var loginUrl = "https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:5002/callback&client_id=253a2a78c5434b3dae3c9d9002a3b537&scope=esi-characters.read_standings.v1";

        return loginUrl;
    }

    render(){
        return (
            <a href={this.createLoginUrl()}>Login</a>
        );
    }
}