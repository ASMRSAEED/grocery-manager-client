import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import CustomLink from '../../Pages/CustomLink/CustomLink';
import "./Header.css"


const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="myColor" variant="dark">
      <Container>
        <Navbar.Brand style={{ color: 'black', fontSize: "30px" }}><CustomLink to="/home">Grocery Manager</CustomLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={{ color: 'black', fontSize: "20px" }}>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/packages">Packages</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>


            {
              user ? <>
                <CustomLink to="/addProducts">Add Items</CustomLink>
                <CustomLink to="/myOrders">My Items</CustomLink>
                <CustomLink to="/manageInventories">Manage Items</CustomLink>
                <button className="signOut-btn" style={{ color: 'black', fontSize: "20px" }} onClick={handleSignOut}>Logout</button>

              </>
                : <CustomLink to="/login">Login</CustomLink>
            }

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;