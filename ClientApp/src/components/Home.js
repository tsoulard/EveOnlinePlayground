import React, { Component } from 'react';
import {Login} from './EveAuth/Login';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <Login />

    );
  }
}
