import * as React from 'react';

export default class QuestStates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QuestTypes: [],
            EnableControls: false,
            QuestStates: [],
            NPCGroups: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.buildQuestState = this.buildQuestState.bind(this);
        this.addQuestState = this.addQuestState.bind(this);
        this.handleMoveUp = this.handleMoveUp.bind(this);
        this.handleMoveDown = this.handleMoveDown.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.buildKillEnemiesOptions = this.buildKillEnemiesOptions.bind(this);
        this.buildTalkToNPCOptions = this.buildTalkToNPCOptions.bind(this);
        this.buildUseObjectOptions = this.buildUseObjectOptions.bind(this);
        this.buildCollectItemsOptions = this.buildCollectItemsOptions.bind(this);
        this.buildExploreAreaOptions = this.buildExploreAreaOptions.bind(this);
        this.buildUseItemOptions = this.buildUseItemOptions.bind(this);

        this.addKillTarget = this.addKillTarget.bind(this);
        this.handleChangeKillTarget = this.handleChangeKillTarget.bind(this);
        this.handleDeleteKillTarget = this.handleDeleteKillTarget.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            QuestTypes: newProps.questTypes,
            EnableControls: newProps.enableControls,
            QuestStates: newProps.questStates,
            NPCGroups: newProps.npcGroups
        });
    }

    handleChange(event, index) {
        const newQuestStates = this.state.QuestStates;
        newQuestStates[index][event.target.name] = event.target.value;

        this.setState({
            QuestStates: newQuestStates
        });
    }

    handleChangeKillTarget(event, ktIndex, questStateIndex) {
        const newQuestStates = this.state.QuestStates;
        newQuestStates[questStateIndex]['KillTargets'][ktIndex][event.target.name] = event.target.value;

        this.setState({
            QuestStates: newQuestStates
        });
    }
    
    handleChangeQuestType(event, index) {
        const newQuestStates = this.state.QuestStates;
        newQuestStates[index].QuestTypeID = event.target.value;

        this.setState({
            QuestStates: newQuestStates
        });
    }

    handleMoveUp(event, index) {
        const newQuestStates = this.state.QuestStates;
        let newIndex = index - 1;
        if (newIndex < 0) newIndex = 0;

        const element = newQuestStates[index];
        newQuestStates.splice(index, 1);
        newQuestStates.splice(newIndex, 0, element);

        this.setState({
            QuestStates: newQuestStates
        });
    }

    handleMoveDown(event, index) {
        const newQuestStates = this.state.QuestStates;
        let newIndex = index + 1;
        if (newIndex > this.state.QuestStates.length - 1) newIndex = this.state.QuestStates.length - 1;

        const element = newQuestStates[index];
        newQuestStates.splice(index, 1);
        newQuestStates.splice(newIndex, 0, element);

        this.setState({
            QuestStates: newQuestStates
        });
    }

    handleDelete(event, index) {
        const newQuestStates = this.state.QuestStates;
        newQuestStates.splice(index, 1);

        this.setState({
            QuestStates: newQuestStates
        });
    }

    handleDeleteKillTarget(questStateIndex, ktIndex) {
        const newQuestStates = this.state.QuestStates;
        newQuestStates[questStateIndex].KillTargets.splice(ktIndex, 1);

        this.setState({
            QuestStates: newQuestStates
        });
    }

    buildQuestState(questState, index) {
        return <div key={index}>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-1">
                            <div className="row">
                                <button
                                    className="btn-sm btn-outline-primary h-25"
                                    onClick={(event) => this.handleMoveUp(event, index)}>
                                    <i className="fa fa-caret-up fa-lg"></i>
                                </button>
                                <button
                                    className="btn-sm btn-outline-primary h-25"
                                    onClick={(event) => this.handleMoveDown(event, index)}>
                                    <i className="fa fa-caret-down fa-lg"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-2">
                            <input type="text"
                                className="form-control"
                                readOnly={true}
                                value={index + 1} />

                        </div>
                        <div className="col-4">
                            <select id="selectQuestType"
                                name="QuestTypeID"
                                className="form-control"
                                disabled={!this.state.EnableControls}
                                onChange={(event) => this.handleChange(event, index)}
                                value={questState.QuestTypeID}>
                                {this.state.QuestTypes.map((questType) => {
                                    return <option
                                        key={questType.QuestTypeID}
                                        value={questType.QuestTypeID}>
                                        {questType.Name}
                                    </option>;
                                })};
                            </select>
                        </div>
                        <div className="col-2">
                            <input type="text"
                                className="form-control"
                                name="JournalStateID"
                                value={questState.JournalStateID}
                                onChange={(event) => this.handleChange(event, index)}
                                placeholder="Journal State ID">
                            </input>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-primary btn-block" onClick={(event) => this.handleDelete(event, index)}>
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-11 offset-1">
                            {questState.QuestTypeID === '1' &&
                                this.buildKillEnemiesOptions(questState, index)}
                            {questState.QuestTypeID === '2' &&
                                this.buildTalkToNPCOptions(questState, index)}
                            {questState.QuestTypeID === '3' &&
                                this.buildUseObjectOptions(questState, index)}
                            {questState.QuestTypeID === '4' &&
                                this.buildCollectItemsOptions(questState, index)}
                            {questState.QuestTypeID === '5' &&
                                this.buildExploreAreaOptions(questState, index)}
                            {questState.QuestTypeID === '6' &&
                                this.buildUseItemOptions(questState, index)}
                        </div>

                    </div>
                    <div className="row">&nbsp;</div>
                </div>
            </div>
             <div className="row">&nbsp;</div>
        </div>;
    }

    addQuestState() {
        const newElement = {
            QuestTypeID: 0,
            JournalStateID: 0,
            KillTargets: []
        };

        this.setState(prevState => ({
            QuestStates: [...prevState.QuestStates, newElement]
        }));
    }

    addKillTarget(questState, questStateIndex) {
        const newElement = {
            NPCGroupID: 0,
            Quantity: 0
        };

        const newQuestStates = this.state.QuestStates;
        newQuestStates[questStateIndex].KillTargets.push(newElement);

        this.setState({
            QuestStates: newQuestStates
        });
    }


    buildKillEnemiesOptions(questState, questStateIndex) {

        return <div>
            <div className="row">&nbsp;</div>
            <div className="row">
                <label className="center">
                    Kill Enemies Details:
                </label>
            </div>
            <div className="row">
                <button
                    className="btn btn-primary btn-block"
                    disabled={!this.state.EnableControls}
                    onClick={(killTarget) => this.addKillTarget(killTarget, questStateIndex)}>
                    Add Kill Target
                </button>
            </div>
            <div className="row">&nbsp;</div>

            <div className="row">
                <div className="col-2">
                    ID
                </div>
                <div className="col-6">
                    NPC Group
                </div>
                <div className="col-2">
                    Quantity
                </div>
                <div className="col-2">
                    Actions
                </div>
            </div>
            <div className="row">&nbsp;</div>

            {questState.KillTargets.map((killTarget, ktIndex) => {
                return <div key={ktIndex}>
                    <div className="row">
                        <div className="col-2">
                            <input type="text"
                                   className="form-control"
                                   readOnly={true}
                                   value={ktIndex + 1} />
                        </div>
                        <div className="col-6">
                            <select id="selectNPCGroup"
                                    name="NPCGroupID"
                                    className="form-control"
                                    disabled={!this.state.EnableControls}
                                    onChange={(event) => this.handleChangeKillTarget(event, ktIndex, questStateIndex)}
                                    value={killTarget.NPCGroupID}>
                                {this.state.NPCGroups.map((npcGroup) => {
                                    return <option
                                        key={npcGroup.NPCGroupID}
                                        value={npcGroup.NPCGroupID}>
                                        {npcGroup.Name}
                                    </option>;
                                })};
                            </select>
                        </div>
                        <div className="col-2">
                            <input type="text"
                                className="form-control"
                                name="Quantity"
                                value={killTarget.Quantity}
                                onChange={(event) => this.handleChangeKillTarget(event, ktIndex, questStateIndex)}/>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-outline-primary btn-block"
                                onClick={() => this.handleDeleteKillTarget(questStateIndex, ktIndex)}> 
                                Delete
                            </button>
                        </div>

                    </div>
                </div>;
            })}
        </div>;

    }

    buildTalkToNPCOptions(questState) {

    }

    buildUseObjectOptions(questState) {
    }

    buildCollectItemsOptions(questState) {

    }

    buildExploreAreaOptions(questState) {

    }

    buildUseItemOptions(questState) {

    }

    render() {
        return (
            <div>
                <div className="row">
                    <button
                        className="btn btn-primary btn-block"
                        onClick={this.addQuestState}
                        disabled={!this.state.EnableControls}>
                        Add Quest State
                    </button>
                </div>

                <div className="row">&nbsp;</div>

                <div className="row">
                    <div className="col-1">
                        <div className="center">
                            <label>Move</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="center">
                            <label>Order</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="center">
                            <label>Type</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="center">
                            <label>Journal State ID</label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="center">
                            <label>Actions</label>
                        </div>
                    </div>
                </div>

                {this.state.QuestStates.length <= 0 &&
                    <div className="row">
                        <span className="center">
                            No states set for this quest...
                        </span>
                    </div>
                }

                {this.state.QuestStates.map((questState, index) => {
                    return this.buildQuestState(questState, index);
                })}

            </div>
        );



    }
}
