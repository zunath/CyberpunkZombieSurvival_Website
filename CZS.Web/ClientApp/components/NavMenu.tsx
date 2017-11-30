import * as React from 'react';
import { Panel, MenuItem, Tab, Row, Col, Tabs, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import About from "./About";
import Downloads from "./Downloads";
import Admin from './Admin';


export default class NavMenu extends React.Component {
    render() {
        return <div>

            <Tab.Container defaultActiveKey="about">
                <Row className="clearfix">
                    <Col md={4}>
                        <Nav bsStyle="pills" stacked>
                            <NavItem eventKey="about">
                                About
                            </NavItem>
                            <NavItem eventKey="downloads">
                                Downloads
                            </NavItem>
                            <li role="presentation">
                                <a
                                    href='https://discord.gg/sg45eY8'
                                    target="_blank">
                                    Discord (Chat)
                                </a>
                            </li>
                            <li role="presentation">
                                <a
                                    href='http://czs.boards.net/'
                                    target="_blank">
                                    Forums
                                </a>
                            </li>
                            <li role="presentation">
                                <a
                                    href='https://github.com/zunath/CyberpunkZombieSurvival_JVM'
                                    target="_blank">
                                    Source Code
                                </a>
                            </li>
                            <NavItem eventKey="admin">
                                Admin
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md={8}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="about">
                                <About />
                            </Tab.Pane>
                            <Tab.Pane eventKey="downloads">
                                <Downloads />
                            </Tab.Pane>
                            <Tab.Pane eventKey="admin">
                                <Admin />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>;
    }
}
