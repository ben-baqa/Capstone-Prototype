import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

class Header extends React.Component {

  render(){
    return (
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{color:"white"}}>TalkBox</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header;