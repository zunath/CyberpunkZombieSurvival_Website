import * as React from 'react';
import {Link} from 'react-router-dom';

export default class ProfessionViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            professions: props.professions,
            activeProfessionID: 0
        }

        this.changeProfession = this.changeProfession.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            professions: newProps.professions
        });

        if (this.state.activeProfessionID == undefined || this.state.activeProfessionID === 0) {
            this.setState({
                activeProfessionID: newProps.professions[0].ProfessionID
            });
        }
    }

    changeProfession(e, professionID) {
        
        this.setState({
            activeProfessionID: professionID
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3"> 
                        <h5>Profession Name</h5>
                        <hr />
                        <div className="scrollable">
                            <div className="list-group" role="tablist">
                                {this.state.professions.map(profession =>
                                    <Link
                                        className={this.state.activeProfessionID === profession.ProfessionID ? 'list-group-item list-group-item-action show active' : 'list-group-item list-group-item-action'}
                                        data-toggle="list"
                                        to="#"
                                        aria-controls={profession.Name}
                                        key={profession.ProfessionID}
                                        onClick={((e) => this.changeProfession(e, profession.ProfessionID))}>
                                        {profession.Name}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <h5>Details</h5>
                        <hr />
                        <div className="scrollable">
                            <div className="tab-content">
                                {this.state.professions.map(profession =>
                                    <div
                                        className={this.state.activeProfessionID === profession.ProfessionID ? 'tab-pane fade show active' : 'tab-pane fade'}
                                        role="tabpanel"
                                        key={profession.ProfessionID}>

                                        <p>
                                            <i>Description:</i> {profession.Description}
                                        </p>

                                        <p>
                                            <i>Bonuses:</i> {profession.Bonuses}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
                
                


            </div>
        );



    }
}
