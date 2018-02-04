import * as React from 'react';

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
            enableControls: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.addItemReward = this.addItemReward.bind(this);
        this.buildItemReward = this.buildItemReward.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChangeItemResref = this.handleChangeItemResref.bind(this);
        this.handleChangeItemQuantity = this.handleChangeItemQuantity.bind(this);
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(newProps) {
        this.setState({
            Gold: newProps.rewards == null ? 0 : newProps.rewards.Gold,
            XP: newProps.rewards == null ? 0 : newProps.rewards.XP,
            KeyItemID: newProps.rewards == null ? -1 : newProps.rewards.KeyItemID,
            Fame: newProps.rewards == null ? 0 : newProps.rewards.Fame,
            Items: newProps.rewards == null ? [] : newProps.rewards.RewardItems,
            KeyItems: newProps.keyItems,
            enableControls: newProps.enableControls
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleChangeItemResref(event, index) {
        const newItems = this.state.Items;
        newItems[index].Resref = event.target.value;

        this.setState({
            Items: newItems
        });
    }

    handleChangeItemQuantity(event, index) {
        const newItems = this.state.Items;
        newItems[index].Quantity = event.target.value;

        this.setState({
            Items: newItems
        });
    }

    handleDelete(event, index) {
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


    buildItemReward(resref, quantity, index) {
        return <div key={index}>
            <div className="row">
                <div className="col-2">
                    <input type="text"
                        className="form-control"
                        readOnly={true}
                        value={index + 1} />

                </div>
                <div className="col-4">
                    <input type="text"
                           className="form-control"
                           name="Resref"
                           value={resref}
                           onChange={(event) => this.handleChangeItemResref(event, index)}
                           placeholder="Resref">
                    </input>


                </div>
                <div className="col-4">
                    <input type="text"
                           className="form-control"
                           name="Quantity"
                           value={quantity}
                           onChange={(event) => this.handleChangeItemQuantity(event, index)}
                           placeholder="Quantity">
                    </input>


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
                <label htmlFor="gold">Gold:</label>
                <div className="row">
                    <div className="col-12">
                        <input type="text"
                            id="gold"
                            name="Gold"
                            className="form-control"
                            value={this.state.Gold}
                            onChange={this.handleChange}
                            disabled={!this.state.enableControls}>
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
                            disabled={!this.state.enableControls}>
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
                            disabled={!this.state.enableControls}>
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
                    disabled={!this.state.enableControls}>
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
                    disabled={!this.state.enableControls}>
                    Add Item Reward
                </button>

                <div className="row">&nbsp;</div>

                {this.state.Items.length <= 0 &&
                    <div className="row">
                        <span className="center">
                            No item rewards set for this quest...
                        </span>
                    </div>
                }

                {this.state.Items.map((item, index) => {
                    return this.buildItemReward(item.Resref, item.Quantity, index);
                })}
            </div>
        );



    }
}
