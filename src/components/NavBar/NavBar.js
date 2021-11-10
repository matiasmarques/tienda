import React, { useState } from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavbarBrand, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CartScreen } from '../CartScreen/CartScreen';
import './Navbar.css'



export const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <>
        <Nav pills>
          <br/>
        <NavbarBrand href="./" id='tituloNav'>Concesionaria</NavbarBrand>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle} id='navbar'>
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
            <Link to='/auto/Deportivo'>
              <DropdownItem>Deportivo</DropdownItem>
            </Link>
              <DropdownItem divider />
            <Link to='/auto/Diario'>
              <DropdownItem>Diario</DropdownItem>
            </Link>
            </DropdownMenu>
            </UncontrolledDropdown>
            <DropdownItem divider />
            <DropdownItem href="../MiCuenta">Mi cuenta</DropdownItem>
            <DropdownItem divider />
            <Link to="../cart"><CartWidget><CartScreen/> </CartWidget></Link>
          </DropdownMenu>
        </Dropdown>
      </Nav>       
      <br/> 
      <br/> 
      </>
    )
}
