import React, {useState} from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import {useAuth} from "./contexts/AuthContext";
import {useNavigate} from "react-router-dom";

export const Header = () => {

  const {currentUser, logout} = useAuth();
  const {error, setError} = useState("");
  const navigate = useNavigate();

  async function handleLogout(){
    try{
      await logout();
      navigate('/');
    } catch {
      setError('Failed to log out.');
    }
  }

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/channels" style={{color:"white"}}>TalkBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{color:"white"}}>
            {currentUser && currentUser.email}&nbsp;
          </Navbar.Text>
          {currentUser && currentUser.email && <Button variant="danger" onClick={handleLogout}>Log Out</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;