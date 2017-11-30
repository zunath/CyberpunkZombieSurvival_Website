import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';
import { Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class Header extends React.Component<any, any> {
    vm: any;

    constructor(props: any) {
        super(props);
        this.vm = dotnetify.react.connect('HeaderViewModel', this);
        this.state = {}
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    public render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/">Cyberpunk Zombie Survival</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/downloads">Downloads</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://discord.gg/sg45eY8" target="_blank">Discord (Chat)</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://czs.boards.net/" target="_blank">Forums</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/zunath/CyberpunkZombieSurvival_JVM" target="_blank">Source Code</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/admin">Admin</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );



    }
}
