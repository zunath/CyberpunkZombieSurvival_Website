import * as React from 'react';
import { Grid, Row, Table } from "react-bootstrap";
import * as dotnetify from 'dotnetify';

export default class QuickBuildLog extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        dotnetify.react.connect('QuickBuildLogViewModel', this);
        this.state = { QuickBuildLogs: [] };
    }
    render() {
        return <div>

            <Grid>
                <Row>
                    <h2 className="center">Quick Build Log</h2>
                </Row>

                <Row>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>PC Territory Flag ID</th>
                                <th>Structure ID</th>
                                <th>DM Name</th>
                                <th>Date Built</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.QuickBuildLogs.map(obj => {
                                return <tr>
                                    <td>
                                        {obj.PCTerritoryFlagID}
                                    </td>
                                    <td>
                                        {obj.PCTerritoryFlagStructureID}
                                    </td>
                                    <td>
                                        {obj.DMName}
                                    </td>
                                    <td>
                                        {obj.DateBuilt}
                                    </td>
                                </tr>;
                            })}
                        </tbody>
                    </Table>
                </Row>
            </Grid>
        </div>;
    }
}