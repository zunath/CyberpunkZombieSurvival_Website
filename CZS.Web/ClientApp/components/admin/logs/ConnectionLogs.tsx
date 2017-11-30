import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';
import { Row, Table } from "reactstrap";

export default class ConnectionLogs extends React.Component<any, any> {
    vm: any;

    constructor(props: any) {
        super(props);
        this.vm = dotnetify.react.connect('ConnectionLogsViewModel', this);
        this.state = { ConnectionLogs: [] }
    }

    componentWillUnmount() {
        this.vm.$destroy();
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
                
                <Row>
                    <h2 className="center">Connection Logs</h2>
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
                            {this.state.ConnectionLogs.map(obj => <tr key={obj.ClientLogEventId}>
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
            
            </div>
        );



    }
}
