import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';
import { Grid, Row, Table, Button } from 'reactstrap';

export default class Downloads extends React.Component<any, any> {
    vm: any;

    constructor(props: any) {
        super(props);
        this.vm = dotnetify.react.connect('DownloadsViewModel', this);
        this.state = { DownloadList: [] }
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    public render() {
        return (
            <div>
                
                <Row>
                    <h2 className="center">Downloads</h2>
                </Row>

                <Row>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.DownloadList.map(function (obj) {
                                return <tr key={obj.DownloadId}>
                                    <td>
                                        {obj.Name}
                                    </td>
                                    <td>
                                        {obj.Description}
                                    </td>
                                    <td>
                                        <Button href={obj.Url}>
                                            Download
                                        </Button>

                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Row>
            
            </div>
        );



    }
}
