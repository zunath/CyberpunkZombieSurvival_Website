import * as React from 'react';
import * as dotnetify from 'dotnetify';

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
                
                <div className="row">
                    <table className="table">
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
                                                                        {obj.SenderPlayerId === null ? obj.SenderDMName : obj.SenderPlayerId}
                                                                    </td>
                                                                    <td>
                                                                        {obj.SenderCDKey}
                                                                    </td>
                                                                    <td>
                                                                        {obj.ReceiverAccountName}
                                                                    </td>
                                                                    <td>
                                                                        {obj.ReceiverPlayerId === null ? obj.ReceiverDMName : obj.ReceiverPlayerId}
                                                                    </td>
                                                                    <td>
                                                                        {obj.ReceiverCdkey}
                                                                    </td>
                                                                    <td>
                                                                        {obj.Message}
                                                                    </td>
                                                                    <td>
                                                                        {obj.DateSent}
                                                                    </td>
                                                                </tr>)}
                        </tbody>
                    </table>
                </div>
            
            </div>
        );



    }
}
