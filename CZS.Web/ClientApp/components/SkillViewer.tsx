import * as React from 'react';

export default class SkillDetails extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            skills: props.skills
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            skills: newProps.skills
        });
    }

    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3"> 
                        <h5>Skill Name</h5>
                        <div className="scrollable">
                            <div className="list-group" id="skill-list" role="tablist">
                                {this.state.skills.map(skill =>
                                    <a
                                        id={`#skill-list-${skill.SkillID}`}
                                        className="list-group-item list-group-item-action"
                                        data-toggle="list"
                                        href={`/features/#skill-${skill.SkillID}`}
                                        aria-controls={skill.Name}>
                                        {skill.Name}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <h5>Description</h5>
                        <div className="scrollable">
                            <div className="tab-content" id="skill-tabcontent">
                                {this.state.skills.map(skill =>
                                    <div
                                        id={`#skill-${skill.SkillID}`}
                                        className="tab-pane"
                                        role="tabpanel">
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
