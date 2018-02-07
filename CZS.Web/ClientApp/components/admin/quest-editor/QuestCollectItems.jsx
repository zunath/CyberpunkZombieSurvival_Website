import * as React from 'react';
import QuestItemDetails from './QuestItemDetails';

export default class QuestCollectItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            KeyItems: props.KeyItems,
            RequiredItems: props.RequiredItems === undefined ? [] : props.RequiredItems,
            RequiredKeyItems: props.RequiredKeyItems === undefined ? [] : props.RequiredKeyItems
        };

        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.addKeyItem = this.addKeyItem.bind(this);
        this.deleteRequiredItem = this.deleteRequiredItem.bind(this);
        this.handleDeleteKeyItem = this.handleDeleteKeyItem.bind(this);
        this.changeRequiredItem = this.changeRequiredItem.bind(this);
    }
    
    componentWillUnmount() {
    }

    componentWillReceiveProps(newProps) {
        //this.setState({
        //    KeyItems: newProps.KeyItems,
        //    RequiredItems: newProps.RequiredItems === undefined ? [] : newProps.RequiredItems,
        //    RequiredKeyItems: newProps.RequiredKeyItems === undefined ? [] : newProps.RequiredKeyItems
        //});
    }

    handleChange() {
        
    }

    changeRequiredItem(index, name, value) {
        const newRequiredItems = this.state.RequiredItems;
        newRequiredItems[index][name] = value;

        this.setState({
            RequiredItems: newRequiredItems
        });
    }

    addItem() {

        // Only add a new item if the last one has been set.
        const lastIndex = this.state.RequiredItems.length - 1;
        if (lastIndex >= 0) {
            if (this.state.RequiredItems[lastIndex].Resref === '' ||
                this.state.RequiredItems[lastIndex].Quantity <= 0) {
                return;
            }
        }

        const newElement = {
            Resref: '',
            Quantity: 0
        };

        this.setState(prevState => ({
            RequiredItems: [...prevState.RequiredItems, newElement]
        }));
    }

    addKeyItem() {
        
    }

    deleteRequiredItem(index) {
        const newItems = this.state.RequiredItems;
        newItems.splice(index, 1);

        this.setState({
            RequiredItems: newItems
        });
    }

    handleDeleteKeyItem() {
        
    }

    render() {
        return (
            <div>
                <div className="row">&nbsp;</div>
                <div className="row">
                    <label className="center">
                        Collect Items Details:
                    </label>
                </div>
                <div className="row">
                    <button
                        className="btn btn-primary btn-block"
                        onClick={this.addItem}>
                        Add Required Item
                    </button>
                </div>

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

                {this.state.RequiredItems.length <= 0 &&
                    <div className="row">
                        <span className="center">
                            No required items set for this quest...
                        </span>
                    </div>
                }
                
                {this.state.RequiredItems.map((item, index) => {
                    return <QuestItemDetails
                        key={index}
                        Index={index}
                        Resref={item.Resref}
                        Quantity={item.Quantity}
                        OnDeleteCallback={this.deleteRequiredItem}
                        OnChangeCallback={this.changeRequiredItem}/>;
                })}

            </div>
        );



    }
}
