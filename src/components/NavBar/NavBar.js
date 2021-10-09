import React, { useState } from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavbarBrand } from 'reactstrap';


export const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
  
    return (
        <>
        <Nav pills>
        <NavbarBrand>Concesionaria</NavbarBrand>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Menu
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Mi tienda</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#">Articulos</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#">Compras</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#">Mi cuenta</DropdownItem>
            <DropdownItem divider />
            <CartWidget/>
          </DropdownMenu>
        </Dropdown>
      </Nav>        
      </>
    )
}
