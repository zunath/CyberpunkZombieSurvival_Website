import * as React from 'react';
import NavMenu from './NavMenu';
import Header from './Header';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';

export class Layout extends React.Component<{}, {}> {

    
    render() {
        return <div>
            <Header />
            <Row>
                <Col lg={3}>
                    <NavMenu />
                </Col>

                <Col lg={9}>
                    {this.props.children}
                </Col>
            </Row>
        </div>;
    }
}
