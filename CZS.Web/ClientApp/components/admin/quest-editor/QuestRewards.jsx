import * as React from 'react';
import QuestItemDetails from './QuestItemDetails';

export default class QuestRewards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Gold: 0,
            XP: 0,
            KeyItemID: -1,
            Fame: 0,
            Items: [],
            KeyItems: [],
            EnableControls: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.addItemReward = this.addItemReward.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.changeItem = this.changeItem.bind(this);
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(newProps) {
        this.setState({
            Gold: newProps.rewards == null ? 0 : newProps.Rewards.Gold,
            XP: newProps.rewards == null ? 0 : newProps.Rewards.XP,
            KeyItemID: newProps.rewards == null ? -1 : newProps.Rewards.KeyItemID,
            Fame: newProps.rewards == null ? 0 : newProps.Rewards.Fame,
            Items: newProps.rewards == null ? [] : newProps.Rewards.RewardItems,
            KeyItems: newProps.KeyItems,
            EnableControls: newProps.EnableControls
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    changeItem(index, name, value) {
        const newItems = this.state.Items;
        newItems[index][name] = value;

        this.setState({
            Items: newItems
        });
    }

    handleDelete(index) {
        const newItems = this.state.Items;
        newItems.splice(index, 1);

        this.setState({
            Items: newItems
        });
    }

    addItemReward() {

        // Only add a new item if the last one has been set.
        const lastIndex = this.state.Items.length - 1;
        if (lastIndex >= 0) {
            if (this.state.Items[lastIndex].Resref === '' ||
                this.state.Items[lastIndex].Quantity <= 0) {
                return;
            }
        }
        
        const newElement = {
            Resref: '',
            Quantity: 0
        };

        this.setState(prevState => ({
            Items: [...prevState.Items, newElement]
        }));
    }
    
    render() {
        return (
            <div>
                <label htmlFor="gold">Gold:</label>
                <div className="row">
                    <div className="col-12">
                        <input type="text"
                            id="gold"
                            name="Gold"
                            className="form-control"
                            value={this.state.Gold}
                            onChange={this.handleChange}
                            disabled={!this.state.EnableControls}>
                        </input>
                    </div>
                </div>
                <div className="row">&nbsp;</div>
                <label htmlFor="xp">XP:</label>
                <div className="row">
                    <div className="col-12">
                        <input type="text"
                            id="xp"
                            name="XP"
                            className="form-control"
                            value={this.state.XP}
                            onChange={this.handleChange}
                            disabled={!this.state.EnableControls}>
                        </input>
                    </div>
                </div>
                <div className="row">&nbsp;</div>
                <label htmlFor="fame">Fame:</label>
                <div className="row">
                    <div className="col-12">
                        <input type="text"
                            id="fame"
                            name="Fame"
                            className="form-control"
                            value={this.state.Fame}
                            onChange={this.handleChange}
                            disabled={!this.state.EnableControls}>
                        </input>
                    </div>
                </div>
                <div className="row">&nbsp;</div>
                <label htmlFor="keyItemReward">Key Item:</label>
                <select id="keyItemReward"
                    name="KeyItemID"
                    className="form-control"
                    value={this.state.KeyItemID}
                    onChange={this.handleChange}
                    disabled={!this.state.EnableControls}>
                    {this.state.KeyItems.map(function (keyItem) {
                        return <option
                            key={keyItem.KeyItemID}
                            value={keyItem.KeyItemID}>
                            {keyItem.Name}
                        </option>;
                    })};
                </select>

                <div className="row">&nbsp;</div>

                <label>Item Rewards:</label>
                <button
                    className="btn btn-primary btn-block"
                    onClick={this.addItemReward}
                    disabled={!this.state.EnableControls}>
                    Add Item Reward
                </button>

                <div className="row">&nbsp;</div>

                <div className="row">
                    <div className="col-2">
                        <div className="center">
                            <label>ID</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="center">
                            <label>Resref</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="center">
                            <label>Quantity</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="center">
                            <label>Actions</label>
                        </div>
                    </div>
                </div>

                <div className="row">&nbsp;</div>

                {this.state.Items.length <= 0 &&
                    <div className="row">
                        <span className="center">
                            No item rewards set for this quest...
                        </span>
                    </div>
                }

                {this.state.Items.map((item, index) => {
                    return <QuestItemDetails
                        key={index}
                        Index={index}
                        Resref={item.Resref}
                        Quantity={item.Quantity}
                        OnDeleteCallback={this.handleDelete}
                        OnChangeCallback={this.changeItem}/>;
                })}
            </div>
        );



    }
}
