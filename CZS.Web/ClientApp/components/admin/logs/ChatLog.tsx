import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';
import { Grid, Row, Table } from "react-bootstrap";

export default class ChatLog extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        dotnetify.react.connect('ChatLogViewModel', this);
        this.state = { ChatLogs: [] }
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
                                    <th>Sender Account</th>
                                    <th>Sender Character</th>
                                    <th>Sender CD Key</th>
                                    <th>Receiver Account</th>
                                    <th>Receiver Character</th>
                                    <th>Receiver CD Key</th>
                                    <th>Message</th>
                                    <th>Date Sent</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {this.state.ChatLogs.map(obj => <tr>
                                                                        <td>
                                                                            {obj.SenderAccountName}
                                                                        </td>
                                                                        <td>
                                                                            {obj.SenderPlayerID === null ? obj.SenderDMName : obj.SenderPlayerID}
                                                                        </td>
                                                                        <td>
                                                                            {obj.SenderCDKey}
                                                                        </td>
                                                                        <td>
                                                                            {obj.ReceiverAccountName}
                                                                        </td>
                                                                        <td>
                                                                            {obj.ReceiverPlayerID === null ? obj.ReceiverDMName : obj.ReceiverPlayerID}
                                                                        </td>
                                                                        <td>
                                                                            {obj.ReceiverCDKey}
                                                                        </td>
                                                                        <td>
                                                                            {obj.Message}
                                                                        </td>
                                                                        <td>
                                                                            {obj.DateSent}
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
