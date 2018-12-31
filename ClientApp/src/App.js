import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Login } from './components/EveAuth/Login';
import { NavMenu } from './components/NavMenu/NavMenu'; 
import {Callback} from './components/EveAuth/Callback';
import { Home } from './components/Home';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <NavMenu/>
        <Route exact path='/' component={Login} />
        <Route path='/Callback' component={Callback} />
        <Route path='/Home' component={Home} />
      </Layout>
    );
  }
}
