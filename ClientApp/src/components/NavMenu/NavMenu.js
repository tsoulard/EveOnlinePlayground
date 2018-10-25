import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Eve Test App</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
