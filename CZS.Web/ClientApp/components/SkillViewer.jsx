import * as React from 'react';
import {Link} from 'react-router-dom';

export default class SkillDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: props.skills,
            activeSkillID: 0
        }

        this.changeSkill = this.changeSkill.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            skills: newProps.skills
        });

        if (this.state.activeSkillID == undefined || this.state.activeSkillID === 0) {
            this.setState({
                activeSkillID: newProps.skills[0].SkillID
            });
        }
    }

    changeSkill(e, skillID) {
        
        this.setState({
            activeSkillID: skillID
        });
    }
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3"> 
                        <h5>Skill Name</h5>
                        <hr />
                        <div className="scrollable">
                            <div className="list-group" role="tablist">
                                {this.state.skills.map(skill =>
                                    <Link
                                        className={this.state.activeSkillID === skill.SkillID ? 'list-group-item list-group-item-action show active' : 'list-group-item list-group-item-action'}
                                        data-toggle="list"
                                        to="#"
                                        aria-controls={skill.Name}
                                        key={skill.SkillID}
                                        onClick={((e) => this.changeSkill(e, skill.SkillID))}>
                                        {skill.Name}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <h5>Description</h5>
                        <hr />
                        <div className="scrollable">
                            <div className="tab-content">
                                {this.state.skills.map(skill =>
                                    <div
                                        className={this.state.activeSkillID === skill.SkillID ? 'tab-pane fade show active' : 'tab-pane fade'}
                                        role="tabpanel"
                                        key={skill.SkillID}>
                                        {skill.Description}
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
