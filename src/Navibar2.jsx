import React from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button,
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
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Navbar  style={{paddingTop:'0px'}}>
      <NavbarContent style={{position: 'fixed', backgroundColor: 'black', width:'100%', marginTop:'-3px',fontSize: '24px'}} >
        <NavbarItem style={inlineBlockStyle}>
          <Link style={{ color: 'lightgrey' }} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem style={inlineBlockStyle}>
          <Link style={{ color: 'lightgrey' }} href="#/gym">
            Me
          </Link>
        </NavbarItem>
        
        <Dropdown style={{ backgroundColor: 'black', borderRadius: '5%',fontSize: '24px' }}>
          <DropdownTrigger style={{ backgroundColor: 'black' }}>
            <Button variant="bordered">Projects</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" >
            <DropdownItem>
              <Link href="#/chemsafe">
                <span style={{ color: 'lightgrey' }}>Chemsafe</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#/sphere">
                <span style={{ color: 'lightgrey' }}>Automation</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#/wobracing">
                <span style={{ color: 'lightgrey' }}>wob-racing</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#/homeoffice">
                <span style={{ color: 'lightgrey' }}>Home-Office Study</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#/master">
                <span style={{ color: 'lightgrey' }}>Master Thesis</span>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
    
  );
}
