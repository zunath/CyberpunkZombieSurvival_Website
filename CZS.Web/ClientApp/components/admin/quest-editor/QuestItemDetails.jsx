import * as React from 'react';

export default class QuestItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Index: props.Index,
            Resref: props.Resref,
            Quantity: props.Quantity,
            OnDeleteCallback: props.OnDeleteCallback,
            OnChangeCallback: props.OnChangeCallback
        };

        this.handleChange = this.handleChange.bind(this);
        this.raiseDelete = this.raiseDelete.bind(this);
        this.raiseParentChange = this.raiseParentChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            Index: newProps.Index,
            Resref: newProps.Resref,
            Quantity: newProps.Quantity,
            OnDeleteCallback: newProps.OnDeleteCallback,
            OnChangeCallback: newProps.OnChangeCallback
        });
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
            [name]: value
        }, this.raiseParentChange);
    }

    raiseParentChange() {
        if (this.state.OnChangeCallback != null) {
            this.state.OnChangeCallback(this.state.Index, this.state.Resref, this.state.Quantity);
        }
    }

    raiseDelete() {
        if (this.state.OnDeleteCallback != null) {
            this.state.OnDeleteCallback(this.state.Index);
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <input type="text"
                               className="form-control"
                               readOnly={true}
                               value={this.state.Index + 1} />

                    </div>
                    <div className="col-4">
                        <input type="text"
                               className="form-control"
                               name="Resref"
                               value={this.state.Resref}
                               onChange={(event) => this.handleChange(event)}
                               placeholder="Resref">
                        </input>


                    </div>
                    <div className="col-4">
                        <input type="text"
                               className="form-control"
                               name="Quantity"
                               value={this.state.Quantity}
                               onChange={(event) => this.handleChange(event)}
                               placeholder="Quantity">
                        </input>


                    </div>
                    <div className="col-2">
                        <button className="btn btn-outline-primary"
                            onClick={this.raiseDelete}>
                            Delete
                        </button>

                    </div>

                </div>

                <div className="row">&nbsp;</div>
            </div>
        );



    }
}
