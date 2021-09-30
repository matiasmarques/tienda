import React, { useState } from 'react'
import { CartWidget } from './CartWidget'
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';


export const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
  
    return (
        <>
        <div>
        <Nav pills>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Menu
          </DropdownToggle>
          <DropdownMenu right>
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
      </div>
      </>
    )
}
