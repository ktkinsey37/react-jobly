import React, {useContext} from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav,  Collapse,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from "reactstrap";
import UserContext from "./UserContext";


function NavBar() {

  const user = useContext(UserContext)

  if (user.username == undefined){
    console.log("this is with username undefined")

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">Jobly</NavbarBrand>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/login">Login</NavLink>            
          </NavItem>
          <NavItem>
            <NavLink to="/register">Register</NavLink>            
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )};





  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">Jobly</NavbarBrand>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>            
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>            
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
