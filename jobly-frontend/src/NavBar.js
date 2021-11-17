import React from "react";
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

function NavBar() {
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
