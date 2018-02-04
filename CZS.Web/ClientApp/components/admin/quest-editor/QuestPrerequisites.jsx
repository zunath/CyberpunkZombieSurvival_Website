import * as React from 'react';

export default class QuestPrerequisites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prerequisites: [],
            quests: []
        }

        this.addPrerequisite = this.addPrerequisite.bind(this);
        this.buildDetail = this.buildDetail.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.recalculateIndices = this.recalculateIndices.bind(this);
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(newProps) {

        newProps.prerequisites.map((prereq, index) => {
            prereq.QuestPrerequisiteID = index + 1;
        });

        this.setState({
            prerequisites: newProps.prerequisites,
            quests: newProps.quests
        });
    }

    addPrerequisite() {

        // Only add a new prereq if the last one has been set.
        const lastIndex = this.state.prerequisites.length - 1;
        if (lastIndex >= 0) {
            if (this.state.prerequisites[lastIndex].RequiredQuestID === 0) {
                return;
            }
        }

        const newElement = {
            QuestPrerequisiteID: this.state.prerequisites.length + 1,
            RequiredQuestID: 0
        };

        this.setState(prevState => ({
            prerequisites: [...prevState.prerequisites, newElement]
        }));
    }

    handleChange(event, prereq) {
        prereq.RequiredQuestID = event.target.value;
        const newPrerequisites = this.state.prerequisites;
        newPrerequisites[prereq.QuestPrerequisiteID - 1] = prereq;

        this.setState({
            prerequisites: newPrerequisites
        });
    }

    handleDelete(event, prereq) {

        const index = prereq.QuestPrerequisiteID - 1;
        const newPrerequisites = this.state.prerequisites;
        newPrerequisites.splice(index, 1);
        
        this.setState({
            prerequisites: newPrerequisites
        }, this.recalculateIndices);
    }

    recalculateIndices() {
        const newPrerequisites = this.state.prerequisites;
        newPrerequisites.map((prereq, index) => {
            prereq.QuestPrerequisiteID = index + 1;
        });

        this.setState({
            prerequisites: newPrerequisites
        });
    }

    buildDetail(prereq) {
        return <div key={prereq.QuestPrerequisiteID}>
            <div className="row">
                <div className="col-2">
                    <input type="text"
                        name="prereq.QuestPrerequisiteID"
                        className="form-control"
                        readOnly={true}
                        value={prereq.QuestPrerequisiteID} />

                </div>
                <div className="col-8">
                    <select id="selectQuest"
                        name="prereq.RequiredQuestID"
                        className="form-control"
                        onChange={(event) => this.handleChange(event, prereq)}
                        value={prereq.RequiredQuestID}>
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
                    <button className="btn btn-outline-primary" onClick={(event) => this.handleDelete(event, prereq)}>
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
                            onClick={this.addPrerequisite}>
                            Add Prerequisite
                        </button>
                    </div>
                </div>

                <div className="row">&nbsp;</div>

                {this.state.prerequisites.length <= 0 &&
                    <div className="row">
                        <span className="center">
                            No prerequisites set for this quest...
                        </span>
                    </div>
                }

                {this.state.prerequisites.map(prereq => {
                    return this.buildDetail(prereq);
                })}
            </div>
        );



    }
}
