import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';
import { Row, Col, Navbar } from "react-bootstrap";

export default class Header extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        dotnetify.react.connect('HeaderViewModel', this);
        this.state = {}
    }

    public render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Navbar>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="/">
                                        Cyberpunk Zombie Survival
                                    </a>
                                </Navbar.Brand>
                            </Navbar.Header>
                        </Navbar>
                    </Col>

                </Row>

            </div>
        );



    }
}
