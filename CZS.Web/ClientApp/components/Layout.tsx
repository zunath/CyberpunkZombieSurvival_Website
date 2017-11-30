import * as React from 'react';
import Header from './Header';
import { Grid, Row, Col, Table, Button, Container } from 'reactstrap';

export class Layout extends React.Component<{}, {}> {

    
    render() {
        return <div>
            <Header />

            <Container>
                <Row>
                    {this.props.children}
                </Row>
            </Container>
            
        </div>;
    }
}
