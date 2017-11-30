import * as React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";


export default class NavMenu extends React.Component {
    render() {
        return <div className='main-nav'>

                   <Navbar>
                       <Navbar.Header>
                           <Navbar.Brand>
                               <a href="/">CZS</a>
                           </Navbar.Brand>
                       </Navbar.Header>
                       <Nav>
                           <NavItem href="/about">About</NavItem>
                           <NavDropdown href="#" title="Features" id="featuresDDL">
                               <MenuItem href="/story">Story</MenuItem>
                               <MenuItem href="/survival">Survival</MenuItem>
                               <MenuItem href="/structure-building">Structure Building</MenuItem>
                               <MenuItem href="/character-progression">Character Progression</MenuItem>
                           </NavDropdown>
                           <NavItem href="/downloads">Downloads</NavItem>
                           <NavItem href="https://czs.boards.net/" target="_blank">Forums</NavItem>
                           <NavItem href="https://discord.gg/sg45eY8" target="_blank">Discord (Chat)</NavItem>
                           <NavItem href="https://github.com/zunath/CyberpunkZombieSurvival_JVM" target="_blank">GitHub (Developers)</NavItem>
                           <NavDropdown title="Admin" id="adminDDL">
                               <MenuItem href="/logs">Server Logs</MenuItem>
                               <MenuItem href="/quest-editor">Quest Editor</MenuItem>
                               <MenuItem href="/player-characters">Player Characters</MenuItem>
                               <MenuItem href="/dm-management">DM Management</MenuItem>
                               <MenuItem href="/loot-table-editor">Loot Tables</MenuItem>
                           </NavDropdown>
                       </Nav>
                   </Navbar>
               </div>;
    }
}
