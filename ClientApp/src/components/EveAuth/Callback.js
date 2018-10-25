import React, { Component } from 'react';
import qs from 'query-string';
import axios from 'axios';

export class Callback extends Component {
    displayName = Callback.name

    constructor(props) {
        super(props);

        this.state = {
            code: "",
            accessCode: ""
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
        axios.post("api/EveAuth", requestBody).then((response) => {
            this.setState({ accessToken: response.access_token });
        });
    }



    render() {
        return (
            <div>
                <p>{this.state.code}</p>
                <p>{this.state.accessCode}</p>
            </div>
        );
    }
}