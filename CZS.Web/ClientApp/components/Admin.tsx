import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';
import { Row, Col, Button } from 'react-bootstrap'

export default class Admin extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        dotnetify.react.connect('AdminViewModel', this);
        this.state = {}
    }

    public render() {
        return (
            <div>

                <Row>

                    <Col md={3}>
                        <Button>
                            View Logs
                        </Button>
                    </Col>
                    <Col md={3}>
                        <Button>
                            View Logs
                        </Button>
                    </Col>
                    <Col md={3}>
                        <Button>
                            View Logs
                        </Button>
                    </Col>
                    <Col md={3}>
                        <Button>
                            View Logs
                        </Button>
                    </Col>
                    <Col md={3}>
                        <Button>
                            View Logs
                        </Button>
                    </Col>

                </Row>
                


            </div>
        );



    }
}
