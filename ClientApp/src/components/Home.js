import React, { Component } from 'react';
import {Login} from './EveAuth/Login';

export class Home extends Component {
  displayName = Home.name

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  setLoginStatus(value){
    this.setState({isLoggedIn: value});
  }

  render() {
    return (
      <div>this means i'm logged in</div>
    );
  }
}
