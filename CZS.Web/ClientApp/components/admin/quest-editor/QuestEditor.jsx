import * as React from 'react';
import { Link } from 'react-router-dom';
import * as dotnetify from 'dotnetify';
import QuestDetails from './QuestDetails';
import QuestPrerequisites from './QuestPrerequisites';
import QuestStates from './QuestStates';
import QuestRewards from './QuestRewards';

export default class QuestEditor extends React.Component {
    constructor(props) {
        super(props);
        this.vm = dotnetify.react.connect('QuestEditorViewModel', this);
        this.dispatch = state => this.vm.$dispatch(state);

        this.state = {
            activeTab: '1',
            Quests: [],
            activeQuestID: 0,
            ActiveQuest: {},
            KeyItems: [],
            FameRegions: [],
            QuestTypes: [],
            NPCGroups: []
        }

        this.changeQuest = this.changeQuest.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
        this.handleDiscardChanges = this.handleDiscardChanges.bind(this);
        this.receiveDetailChanges = this.receiveDetailChanges.bind(this);
        this.receivePrerequisiteChanges = this.receivePrerequisiteChanges.bind(this);
        this.receiveQuestStateChanges = this.receiveQuestStateChanges.bind(this);
        this.receiveQuestRewardsChanges = this.receiveQuestRewardsChanges.bind(this);
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    changeQuest(e) {
        this.setState({
            activeQuestID: e.target.value
        });
        this.dispatch({ ChangeQuest: e.target.value });
    }

    handleSaveChanges() {
        alert(JSON.stringify(this.state.ActiveQuest));
    }

    handleDiscardChanges() {
        
    }

    receiveDetailChanges(name, value) {
        const newActiveQuest = this.state.ActiveQuest;
        newActiveQuest[name] = value;

        this.setState({
            ActiveQuest: newActiveQuest
        });
    }

    receivePrerequisiteChanges(prerequisiteQuestIDs) {
        const newActiveQuest = this.state.ActiveQuest;
        newActiveQuest.PrerequisiteQuestIDs = prerequisiteQuestIDs;

        this.setState({
            ActiveQuest: newActiveQuest
        });
    }

    receiveQuestStateChanges(questStates) {
        const newActiveQuest = this.state.ActiveQuest;
        newActiveQuest.QuestStates = questStates;

        this.setState({
            ActiveQuest: newActiveQuest
        });
    }

    receiveQuestRewardsChanges(rewards) {
        const newActiveQuest = this.state.ActiveQuest;
        newActiveQuest.Rewards = rewards;

        this.setState({
            ActiveQuest: newActiveQuest
        });
    }

    render() {
        return (
            <div>
                <label htmlFor="selectQuest">Quest:</label>
                <div className="row">
                    <div className="col-10">
                        <select id="selectQuest"
                            className="form-control"
                            onChange={this.changeQuest}
                            value={this.state.activeQuestID}>
                            {this.state.Quests.map(function (quest) {
                                return <option
                                           key={quest.QuestID}
                                           value={quest.QuestID}>
                                           {quest.Name}
                                       </option>;
                            })};
                        </select>
                    </div>
                    <div className="col-2">
                        <div className="btn-group">
                            <button className="btn btn-primary">New</button>
                            <span>&nbsp;</span>
                            <button className="btn btn-outline-primary">Delete</button>
                        </div>
                        
                    </div>

                </div>

                <div className="row">&nbsp;</div>

                <div className="row">

                    <div className="col-12">

                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <Link className="nav-link active" data-toggle="tab" to="#nav-details" role="tab">Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" to="#nav-prerequisites" role="tab">Prerequisites</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" to="#nav-states" role="tab">States</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" to="#nav-rewards" role="tab">Rewards</Link>
                            </li>
                        </ul>

                    </div>

                </div>

                <div className="row">

                    <div className="col-12">

                        <div className="tab-content">
                            <div className="row">&nbsp;</div>
                            <div className="tab-pane active" id="nav-details" role="tabpanel">
                                <QuestDetails
                                    Details={this.state.ActiveQuest}
                                    KeyItems={this.state.KeyItems}
                                    FameRegions={this.state.FameRegions}
                                    OnUpdateParent={this.receiveDetailChanges}/>
                            </div>
                            <div className="tab-pane" id="nav-prerequisites" role="tabpanel">
                                <QuestPrerequisites
                                    PrerequisiteQuestIDs={this.state.ActiveQuest.PrerequisiteQuestIDs}
                                    Quests={this.state.Quests}
                                    EnableControls={this.state.activeQuestID <= 0 ? false : true}
                                    OnUpdateParent={this.receivePrerequisiteChanges}/>
                            </div>
                            <div className="tab-pane" id="nav-states" role="tabpanel">
                                <QuestStates 
                                    QuestTypes={this.state.QuestTypes}
                                    EnableControls={this.state.activeQuestID <= 0 ? false : true}
                                    QuestStates={this.state.ActiveQuest.QuestStates}
                                    NPCGroups={this.state.NPCGroups}
                                    KeyItems={this.state.KeyItems}
                                    OnUpdateParent={this.receiveQuestStateChanges}/>
                            </div>
                            <div className="tab-pane" id="nav-rewards" role="tabpanel">
                                <QuestRewards
                                    Rewards={this.state.ActiveQuest.Rewards}
                                    KeyItems={this.state.KeyItems}
                                    EnableControls={this.state.activeQuestID <= 0 ? false : true}
                                    OnUpdateParent={this.receiveQuestRewardsChanges}/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">&nbsp;</div>
                <div className="row">

                    <div className="col-5">
                        <button
                            type="button"
                            className="btn btn-primary btn-block"
                            onClick={this.handleSaveChanges}>
                            Save Changes
                        </button>
                    </div>
                    <div className="col-5">
                        <button
                            type="button"
                            className="btn btn-outline-primary btn-block"
                            onClick={this.handleDiscardChanges}>
                            Discard Changes
                        </button>
                        &nbsp;
                    </div>
                </div>



            </div>
        );



    }
}
