import * as React from 'react';

export default class QuestStates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {}
        }
        
    }

    componentWillUnmount() {
        
    }
    
    render() {
        return (
            <div>
                <label htmlFor="name">Name:</label>
                <div className="row">
                    <div className="col-12">
                        <input type="text" id="name"
                            className="form-control"
                            value={this.state.details.Name}>
                        </input>
                    </div>

                </div>
            </div>
        );



    }
}
