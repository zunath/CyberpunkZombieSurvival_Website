import * as React from 'react';
import ChatLogs from './ChatLogs';
import ConnectionLogs from './ConnectionLogs';
import QuickBuildLogs from './QuickBuildLogs';

export default class Logs extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            activeTab: '1'
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return <div>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#nav-chatlogs" role="tab">Chat Logs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#nav-connectionlogs" role="tab">Connection Logs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#nav-quickbuildlogs" role="tab">Quick Build Logs</a>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane active" id="nav-chatlogs" role="tabpanel">
                    <ChatLogs />
                </div>
                <div className="tab-pane" id="nav-connectionlogs" role="tabpanel">
                    <ConnectionLogs />
                </div>
                <div className="tab-pane" id="nav-quickbuildlogs" role="tabpanel">
                    <QuickBuildLogs />
                </div>
            </div>
            


        </div>;
    }
}