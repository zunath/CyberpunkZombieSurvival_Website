import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';
import { Grid, Row, Table } from "react-bootstrap";

export default class ConnectionLog extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        dotnetify.react.connect('ConnectionLogViewModel', this);
        this.state = { ConnectionLogs: [] }
    }

    getTypeOfLogin(eventTypeID) {
        if (eventTypeID === 1)
            return <span className="greenText">Log In</span>;
        else
            return <span className="redText">Log Out</span>;
    }

    render() {
        return (
            <div>

                <Grid>
                    <Row>
                        <h2 className="center">Chat Log</h2>
                    </Row>

                    <Row>
                        <Table striped>
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Event</th>
                                <th>Player</th>
                                <th>CD Key</th>
                                <th>Account</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.ConnectionLogs.map(obj => <tr>
                                                                      <td>
                                                                          {obj.DateOfEvent}
                                                                      </td>
                                                                      <td>
                                                                          {this.getTypeOfLogin(obj.ClientLogEventTypeID)}
                                                                      </td>
                                                                      <td>
                                                                          {obj.PlayerID}
                                                                      </td>
                                                                      <td>
                                                                          {obj.CDKey}
                                                                      </td>
                                                                      <td>
                                                                          {obj.AccountName}
                                                                      </td>
                                                                  </tr>)}
                            </tbody>
                        </Table>
                    </Row>
                </Grid>

            </div>
        );



    }
}
