import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';
import { Row, Col, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap'

export default class Admin extends React.Component<any, any> {

    vm: any;

    constructor(props: any) {
        super(props);
        this.vm = dotnetify.react.connect('AdminViewModel', this);
        this.state = {}
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    public render() {
        return (
            <div>

                <Row>
                    <h2 className="center">Admin Toolkit</h2>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <CardBody className="center">
                                <CardTitle>Logs</CardTitle>
                                <CardText>Search through log information collected on the server.</CardText>

                                <Button href="/admin/logs">View Logs</Button>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody className="center">
                                <CardTitle>DM Management</CardTitle>
                                <CardText>Add, remove, activate, or deactivate accounts from logging in as Dungeon Masters.</CardText>

                                <Button href="/admin/dm-management">Manage DMs</Button>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody className="center">
                                <CardTitle>Loot Tables</CardTitle>
                                <CardText>Adjust the items found in loot sites.</CardText>

                                <Button href="/admin/loot-table-editor">Manage Loot Tables</Button>
                            </CardBody>

                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardBody className="center">
                                <CardTitle>Quest Editor</CardTitle>
                                <CardText>Add, remove, and edit quest information.</CardText>

                                <Button href="/admin/quest-editor">Edit Quests</Button>
                            </CardBody>

                        </Card>
                    </Col>

                </Row>


            </div>
        );



    }
}
