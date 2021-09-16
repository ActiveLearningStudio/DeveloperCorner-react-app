import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Brand from "../../assets/images/curriki_new_logo.png";
import hearticon from "../../assets/images/Vector.png";
import usericon from "../../assets/images/UserCircle1.png";
import Buttons from "curriki-design-system/dist/utils/Buttons/buttons";
import "./styles.scss";
const Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="light" className="Navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Brand} alt="developer-hub-brand" />
          </Navbar.Brand>
          {/* <div className="navbar-dropdown"> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">
                <img src={usericon} alt="user icon" />
                <a href="curriki.org" target="_blank">
                  Login{" "}
                </a>
                /{" "}
                <a href="curriki.org" target="_blank">
                  Signup
                </a>
              </Nav.Link>
              <Buttons text="donate">
             
              </Buttons>
            </Nav>
          </Navbar.Collapse>
          {/* </div> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
