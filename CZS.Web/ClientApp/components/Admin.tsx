import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';

export default class Admin extends React.Component<any, any> {

    vm: any;

    constructor(props: any) {
        super(props);
        this.vm = dotnetify.react.connect('AdminViewModel', this);
        this.state = {}
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    public render() {
        return (
            <div>

                <h2 className="center">Admin Toolkit</h2>

                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body center">
                                <h4 className="card-title">Logs</h4>
                                <p className="card-text">Search through log information collected on the server.</p>

                                <a className="btn btn-primary" href="/admin/logs" role="button">
                                    View Logs
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body center">
                                <h4 className="card-title">DM Management</h4>
                                <p className="card-text">Add, remove, activate, or deactivate accounts from logging in as Dungeon Masters.</p>

                                <a className="btn btn-primary" href="/admin/dm-management" role="button">
                                    Manage DMs
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body center">
                                <h4 className="card-title">Loot Tables</h4>
                                <p className="card-text">Adjust the items found in loot sites.</p>

                                <a className="btn btn-primary" href="/admin/loot-table-editor" role="button">
                                    Manage Loot Tables
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <div className="card-body center">
                                <h4 className="card-title">Quest Editor</h4>
                                <p className="card-text">Add, remove, and edit quest information.</p>

                                <button className="btn btn-primary" href="/admin/quest-editor" role="button">
                                    Edit Quests
                                </button>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        );



    }
}
