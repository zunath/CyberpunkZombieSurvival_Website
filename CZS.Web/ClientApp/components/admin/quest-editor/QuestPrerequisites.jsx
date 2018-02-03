import * as React from 'react';
import QuestPrerequisiteDetail from './QuestPrerequisiteDetail';

export default class QuestPrerequisites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prerequisites: [],
            quests: []
        }

        this.addPrerequisite = this.addPrerequisite.bind(this);
        this.buildDetail = this.buildDetail.bind(this);
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
        const lastIndex = this.state.prerequisites.length-1;
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

    buildDetail(prereq) {
        return <div key={prereq.QuestPrerequisiteID}>
                   <QuestPrerequisiteDetail
                       prereq={prereq}
                       quests={this.state.quests} />
            
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
