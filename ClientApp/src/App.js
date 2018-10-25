import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { NavMenu } from './components/NavMenu/NavMenu'; 
import {Callback} from './components/EveAuth/Callback';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <NavMenu/>
        <Route exact path='/' component={Home} />
        <Route path='/Callback' component={Callback} />
      </Layout>
    );
  }
}
