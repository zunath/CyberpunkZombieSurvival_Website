import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';

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
                
                <div className="row">
                    <table className="table striped bordered">
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
                                                                        {this.getTypeOfLogin(obj.ClientLogEventTypeId)}
                                                                    </td>
                                                                    <td>
                                                                        {obj.PlayerId}
                                                                    </td>
                                                                    <td>
                                                                        {obj.CDKey}
                                                                    </td>
                                                                    <td>
                                                                        {obj.AccountName}
                                                                    </td>
                                                                </tr>)}
                        </tbody>
                    </table>
                </div>
            
            </div>
        );



    }
}
