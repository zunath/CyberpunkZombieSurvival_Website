import * as React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ChatLog from './ChatLog';
import ConnectionLog from './ConnectionLog';
import QuickBuildLog from './QuickBuildLog';

export default class Logs extends React.Component<any, any> {
    
    render() {
        return <div>
                   <Tabs defaultActiveKey={1}>
                       <Tab eventKey={1} title="Chat Log">
                           <ChatLog />
                       </Tab>
                       <Tab eventKey={2} title="Connection Log">
                           <ConnectionLog />
                       </Tab>
                       <Tab eventKey={3} title="Quick Build Log">
                           <QuickBuildLog />
                       </Tab>
                   </Tabs>

               </div>;
    }
}