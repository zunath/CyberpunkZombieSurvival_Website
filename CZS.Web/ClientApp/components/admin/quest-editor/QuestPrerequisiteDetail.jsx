import * as React from 'react';

export default class QuestPrerequisiteDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prereq: props.prereq,
            quests: props.quests
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUnmount() {
        
    }

    componentWillReceiveProps(newProps) {
        
        this.setState({
            prereq: newProps.prereq,
            quests: newProps.quests
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <input type="text"
                            name="prereq.QuestPrerequisiteID"
                            className="form-control"
                            readOnly={true}
                            value={this.state.prereq.QuestPrerequisiteID}
                            onChange={this.handleChange} />
                        
                    </div>
                    <div className="col-8">
                        <select id="selectQuest"
                                name="prereq.RequiredQuestID"
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.prereq.RequiredQuestID}>
                            {this.state.quests.map((quest) => {
                                return <option
                                    key={quest.QuestID}
                                    value={quest.QuestID}>
                                    {quest.Name}
                                </option>;
                            })};
                        </select>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-outline-primary">
                            Delete
                        </button>

                    </div>

                </div>

            </div>
        );



    }
}
