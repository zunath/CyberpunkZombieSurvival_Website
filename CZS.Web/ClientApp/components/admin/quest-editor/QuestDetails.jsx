import * as React from 'react';

export default class QuestDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QuestID: -1,
            Name: '',
            JournalTag: '',
            FameRegionID: 0,
            RequiredFameAmount: 0,
            AllowRewardSelection: false,
            RewardGold: 0,
            RewardXP: 0,
            RewardKeyItemID: null,
            RewardFame: 0,
            IsRepeatable: false,
            MapNoteTag: '',
            StartKeyItemID: -1,
            RemoveStartKeyItemAfterCompletion: false,

            KeyItems: []
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.changeKeyItem = this.changeKeyItem.bind(this);
    }

    componentWillMount() {

    }

    componentWillUnmount() {

    }
    
    componentWillReceiveProps(newProps) {
        this.setState({
            QuestID: newProps.details.QuestID,
            Name: newProps.details.Name,
            JournalTag: newProps.details.JournalTag,
            FameRegionID: newProps.details.FameRegionID,
            RequiredFameAmount: newProps.details.RequiredFameAmount,
            AllowRewardSelection: newProps.details.AllowRewardSelection,
            RewardGold: newProps.details.RewardGold,
            RewardXP: newProps.details.RewardXP,
            RewardKeyItemID: newProps.details.RewardKeyItemID,
            RewardFame: newProps.details.RewardFame,
            IsRepeatable: newProps.details.IsRepeatable,
            MapNoteTag: newProps.details.MapNoteTag,
            StartKeyItemID: newProps.details.StartKeyItemID,
            RemoveStartKeyItemAfterCompletion: newProps.details.RemoveStartKeyItemAfterCompletion,

            KeyItems: newProps.keyItems

        });
    }

    changeKeyItem(e) {
        this.setState({
            StartKeyItemID: e.target.value
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
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-10">

                                <label htmlFor="questID">ID:</label>
                                <input type="text" id="questID" name="QuestID"
                                    className="form-control"
                                    value={this.state.QuestID === -1 ? '' : this.state.QuestID}
                                    onChange={this.handleChange}
                                    disabled={this.state.QuestID === -1 ? true : false}
                                    readOnly={true}>
                                </input>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="Name"
                                       className="form-control"
                                       value={this.state.QuestID === -1 ? '' : this.state.Name}
                                       onChange={this.handleChange}
                                       disabled={this.state.QuestID === -1 ? true : false}>
                                </input>
                                <label htmlFor="journalTag">Journal Tag:</label>
                                <input type="text" id="journalTag" name="JournalTag"
                                       className="form-control"
                                       value={this.state.QuestID === -1 ? '' : this.state.JournalTag}
                                       onChange={this.handleChange}
                                       disabled={this.state.QuestID === -1 ? true : false}>
                                </input>
                                <label htmlFor="requiredFame">Required Fame:</label>
                                <input type="text" id="requiredFame" name="RequiredFameAmount"
                                       className="form-control"
                                       value={this.state.QuestID === -1 ? '' : this.state.RequiredFameAmount}
                                       onChange={this.handleChange}
                                       disabled={this.state.QuestID === -1 ? true : false}>
                                </input>
                                <label htmlFor="mapNoteTag">Map Note Tag:</label>
                                <input type="text" id="mapNoteTag" name="MapNoteTag"
                                       className="form-control"
                                       value={this.state.QuestID === -1 ? '' : this.state.MapNoteTag}
                                       onChange={this.handleChange}
                                       disabled={this.state.QuestID === -1 ? true : false}>
                                </input>
                                <label htmlFor="selectStartingKeyItem">Starting Key Item:</label>
                                <select id="selectStartingKeyItem"
                                    className="form-control"
                                    onChange={this.changeKeyItem}
                                    value={this.state.StartKeyItemID}
                                    disabled={this.state.QuestID === -1 ? true : false}>
                                    {this.state.KeyItems.map(function(keyItem) {
                                        return <option
                                            key={keyItem.KeyItemID}
                                            value={keyItem.KeyItemID}>
                                            {keyItem.Name}
                                        </option>;
                                    })};
                                </select>


                            </div>

                            <div className="col-2">

                                <label htmlFor="optionsList">Options:</label>
                                <fieldset id="optionsList">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                name="AllowRewardSelection"
                                                className="form-check-input"
                                                value=""
                                                checked={this.state.AllowRewardSelection}
                                                onChange={this.handleChange}
                                                disabled={this.state.QuestID === -1 ? true : false}
                                                type="checkbox" />
                                            Allow Reward Selection
                                        </label>
                                        <label className="form-check-label">
                                            <input
                                                name="IsRepeatable"
                                                className="form-check-input"
                                                value=""
                                                checked={this.state.IsRepeatable}
                                                onChange={this.handleChange}
                                                disabled={this.state.QuestID === -1 ? true : false}
                                                type="checkbox" />
                                            Repeatable
                                        </label>
                                        <label className="form-check-label">
                                            <input
                                                name="RemoveStartKeyItemAfterCompletion"
                                                className="form-check-input"
                                                value=""
                                                checked={this.state.RemoveStartKeyItemAfterCompletion}
                                                onChange={this.handleChange}
                                                disabled={this.state.QuestID === -1 ? true : false}
                                                type="checkbox" />
                                            Remove Starting Key Item
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                        </div>


                        <div className="row">&nbsp;</div>


                    </div>

                </form>

            </div>
        );



    }
}
