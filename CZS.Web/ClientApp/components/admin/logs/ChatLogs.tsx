import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';
import { Row, Table } from "reactstrap";

export default class ChatLogs extends React.Component<any, any> {
    vm: any;

    constructor(props: any) {
        super(props);
        this.vm = dotnetify.react.connect('ChatLogsViewModel', this);
        this.state = { ChatLogs: [] }
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    render() {
        return (
            <div>
                
                <Row>
                    <h2 className="center">Chat Logs</h2>
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
                                
                            {this.state.ChatLogs.map(obj => <tr key={obj.ChatLogId}>
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
            
            </div>
        );



    }
}
