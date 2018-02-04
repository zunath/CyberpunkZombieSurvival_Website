import * as React from 'react';

export default class QuestPrerequisites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prerequisiteQuestIDs: [],
            quests: [],
            enableControls: false
        }

        this.addPrerequisite = this.addPrerequisite.bind(this);
        this.buildDetail = this.buildDetail.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(newProps) {
        
        this.setState({
            prerequisiteQuestIDs: newProps.prerequisiteQuestIDs,
            quests: newProps.quests,
            enableControls: newProps.enableControls
        });
    }

    addPrerequisite() {

        // Only add a new prereq if the last one has been set.
        const lastIndex = this.state.prerequisiteQuestIDs.length - 1;
        if (lastIndex >= 0) {
            if (this.state.prerequisiteQuestIDs[lastIndex] <= 0) {
                return;
            }
        }
        
        this.setState(prevState => ({
            prerequisiteQuestIDs: [...prevState.prerequisiteQuestIDs, 0]
        }));
    }

    handleChange(event, prereqQuestID, index) {
        const newPrerequisites = this.state.prerequisiteQuestIDs;
        newPrerequisites[index] = event.target.value;

        this.setState({
            prerequisiteQuestIDs: newPrerequisites
        });
    }

    handleDelete(event, index) {
        const newPrerequisites = this.state.prerequisiteQuestIDs;
        newPrerequisites.splice(index, 1);
        
        this.setState({
            prerequisiteQuestIDs: newPrerequisites
        });
    }
    
    buildDetail(prereqQuestID, index) {
        return <div key={index}>
            <div className="row">
                <div className="col-2">
                    <input type="text"
                        className="form-control"
                        readOnly={true}
                        value={index+1} />

                </div>
                <div className="col-8">
                    <select id="selectQuest"
                        name="prereqQuestID"
                        className="form-control"
                        disabled={!this.state.enableControls}
                        onChange={(event) => this.handleChange(event, prereqQuestID, index)}
                        value={prereqQuestID}>
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
                    <button className="btn btn-outline-primary" onClick={(event) => this.handleDelete(event, index)}>
                        Delete
                    </button>

                </div>

            </div>

            <div className="row">&nbsp;</div>
        </div>;

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <button
                            className="btn btn-primary btn-block"
                            onClick={this.addPrerequisite}
                            disabled={!this.state.enableControls}>
                            Add Prerequisite
                        </button>
                    </div>
                </div>

                <div className="row">&nbsp;</div>

                {this.state.prerequisiteQuestIDs.length <= 0 &&
                    <div className="row">
                        <span className="center">
                            No prerequisites set for this quest...
                        </span>
                    </div>
                }

                {this.state.prerequisiteQuestIDs.map((prereqQuestID, index) => {
                    return this.buildDetail(prereqQuestID, index);
                })}
            </div>
        );



    }
}
