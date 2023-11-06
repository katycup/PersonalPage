import React from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import pic2 from './assets/chemsafe.gif';

const navbarStyle = {
  position: 'sticky',
  top: 0, // Stick to the top of the viewport
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'left',
};

const inlineBlockStyle = {
  display: 'inline-block',
  marginRight: '20px',
  color: '#bababa', // Set the text color
};

const dropdownMenuStyle = {
  backgroundColor: 'white', // Set the background color for the dropdown menu
};

export default function Navibar2() {
  return (
    <Navbar  style={{paddingTop:'0px'}}>
      <NavbarContent style={{position: 'fixed', backgroundColor: 'black', width:'100%', marginTop:'-3px',fontSize: '24px'}} >
        <NavbarItem style={inlineBlockStyle}>
          <Link style={{ color: 'lightgrey' }} href="/home2">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem style={inlineBlockStyle}>
          <Link style={{ color: 'lightgrey' }} href="/gym">
            Me
          </Link>
        </NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Projects</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" style={{ backgroundColor: 'black' }}>
            <DropdownItem>
              <Link href="/chemsafe">
                <span style={{ color: 'lightgrey',backgroundColor: 'black' }}>Chemsafe</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/sphere">
                <span style={{ color: 'lightgrey',backgroundColor: 'black' }}>Automation</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/wobracing">
                <span style={{ color: 'lightgrey',backgroundColor: 'black' }}>wob-racing</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/homeoffice">
                <span style={{ color: 'lightgrey',backgroundColor: 'black' }}>Home-Office Study</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/master">
                <span style={{ color: 'lightgrey',backgroundColor: 'black' }}>Master Thesis</span>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
