import * as React from 'react';
import * as dotnetify from 'dotnetify';

export default class QuickBuildLogs extends React.Component<any, any> {
    vm: any;

    constructor(props: any) {
        super(props);
        this.vm = dotnetify.react.connect('QuickBuildLogsViewModel', this);
        this.state = { QuickBuildLogs: [] };
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    render() {
        return <div>
            
            <div className="row">
                <table className="table table-responsive">
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
                </table>
            </div>
        </div>;
    }
}