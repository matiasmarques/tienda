import React, { useState } from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavbarBrand, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
  
    return (
        <>
        <Nav pills>
        <NavbarBrand href="./">Concesionaria</NavbarBrand>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Menu
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Mi tienda</DropdownItem>
            <DropdownItem divider />
            <UncontrolledDropdown>
              <DropdownToggle>
                Categorias
              </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="./auto/Deportivo">Deportivo</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="./auto/Diario">Diario</DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>
            <DropdownItem divider />
            <DropdownItem href="./MiCuenta">Mi cuenta</DropdownItem>
            <DropdownItem divider />
            <Link to="./cart"><CartWidget/></Link>
          </DropdownMenu>
        </Dropdown>
      </Nav>        
      </>
    )
}
