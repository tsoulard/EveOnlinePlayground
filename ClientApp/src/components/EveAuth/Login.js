import React, { Component } from 'react';
import qs from 'query-string';
import axios from 'axios';

export class Login extends Component {
    displayName = Login.name

    constructor(props) {
        super(props);
        
        this.state = {
            loginUrl: ""
        }

    }

    componentDidMount() {
        this.getLoginUrl();
    }

    getLoginUrl() {
        axios.get("api/EveAuth/GetLoginUrl").then((response) => {
            this.setState({loginUrl: response.data});
        });
    }

    render(){
        return (
            <a href={this.state.loginUrl}>Login</a>
        );
    }
}