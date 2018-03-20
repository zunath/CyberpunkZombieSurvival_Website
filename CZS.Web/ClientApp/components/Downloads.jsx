import * as React from 'react';
import * as dotnetify from 'dotnetify';

export default class Downloads extends React.Component {
    constructor(props) {
        super(props);
        this.vm = dotnetify.react.connect('DownloadsViewModel', this);
        this.state = { DownloadList: [] }
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    render() {
        return (
            <div>
                
                <h2 className="center">Downloads</h2>
                <div className="row">&nbsp;</div>
                <div className="card border-primary mb-3">
                    <div className="card-body">
                        <h4 className="card-title center">Automatic Downloads</h4>
                        <p className="card-text">
                            <p>
                                The recommended way to download our files is to subscribe to us on Steam. Simply click the button below, click "Subscribe" and the files will download automatically!
                            </p>

                            <a className="btn btn-outline-primary btn-block" target="_blank" href="http://steamcommunity.com/sharedfiles/filedetails/?id=1323035693">
                                Subscribe on Steam
                            </a>
                         </p>
                    </div>
                </div>

                <div className="row">&nbsp;</div>


                <div className="card border-primary mb-3">
                    <div className="card-body">
                        <h4 className="card-title center">Manual Downloads</h4>
                        <p className="card-text">
                            <p>
                                Don't use Steam, or prefer to manage the files yourself? No problem! Download all of the files below and place them into the appropriate location.
                            </p>

                            <div className="row">
                                <table className="table striped bordered">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Link</th>
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
                                                    <a className="btn btn-outline-primary" href={obj.Url}>
                                                        Download
                                                    </a>

                                                </td>
                                            </tr>;
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </p>
                    </div>
                </div>
                
            
            </div>
        );



    }
}
