import React, { Component } from 'react';
import qs from 'query-string';
import axios from 'axios';
import { Redirect } from 'react-router-dom'


export class Callback extends Component {
    displayName = Callback.name

    constructor(props) {
        super(props);

        this.state = {
            code: "",
            accessToken: ""
        }
    }

    componentDidMount() {
        this.getAccessCode();
    }


    getAccessCode() {
        var queryParams = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
        this.setState({ code: queryParams.code });


        var requestBody = {
            token: queryParams.code
        }
        axios.post("api/EveAuth/RequestToken", requestBody).then((response) => {
            this.setState({ accessToken: response.data.access_token });
        });

        this.render();
    }

    render() {
        if (this.state.accessToken == ""){
            return (
                <h1>Not Autherised</h1>
            );
        }
        return <Redirect to='/Home' />;
    }
}