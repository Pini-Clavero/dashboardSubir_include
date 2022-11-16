import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import * as FaIcons from "react-icons/fa"

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} dark="true" expand >
        <NavbarBrand href="/">Include DASHBOARD</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            
            <NavItem>
              <NavLink id="uncontrolledDropdown" href="http://localhost:3000/" >
                Home Include
              </NavLink>
            </NavItem>
            <UncontrolledDropdown id="uncontrolledDropdown" nav inNavbar>
              <DropdownToggle nav caret>
                Redes Sociales
              </DropdownToggle>
              <DropdownMenu right dark className="bg-color-black color-white">
                <DropdownItem><FaIcons.FaFacebook className="me-1"/>include_market</DropdownItem>
                <DropdownItem><FaIcons.FaTwitter className="me-1"/>include.ok</DropdownItem>
                <DropdownItem><FaIcons.FaInstagram className="me-1"/>somosINCLUDE</DropdownItem>
                <DropdownItem><FaIcons.FaPinterest className="me-1"/>includeRealStyle</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText id="uncontrolledDropdown">Gracias!!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;