import * as React from 'react';
import { Link } from 'react-router-dom'
import AvantasiaBeforeHumanity from './lore/AvantasiaBeforeHumanity';
import HumanityBeforeAvantasia from './lore/HumanityBeforeAvantasia';
import AMPTechnology from './lore/AMPTechnology';
import Humans from './lore/Humans';
import Elves from './lore/Elves';
import Orcs from './lore/Orcs';
import Dwarves from './lore/Dwarves';
import Gnomes from './lore/Gnomes';
import Halflings from './lore/Halflings';

export default class Lore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0
        };

        this.changeTab = this.changeTab.bind(this);
    }
    
    componentWillUnmount() {
    }

    changeTab(tab) {
        if (this.state.activeTab !== tab) {
            
            this.setState({
                currentTab: tab
            });
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="center">Lore</h2>
                    </div>
                </div>

                <hr />

                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentTab === 0 ? 'active' : ''}`}
                              onClick={() => this.changeTab(0)}
                              to="#">Humanity Before Avantasia</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentTab === 1 ? 'active' : ''}`}
                              onClick={() => this.changeTab(1)}
                              to="#">Avantasia Before Humanity</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentTab === 2 ? 'active' : ''}`}
                              onClick={() => this.changeTab(2)}
                              to="#">AMP Technology</Link>
                    </li>
                </ul>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentTab === 3 ? 'active' : ''}`}
                              onClick={() => this.changeTab(3)}
                              to="#">Humans</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentTab === 4 ? 'active' : ''}`}
                              onClick={() => this.changeTab(4)}
                              to="#">Elves</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentTab === 5 ? 'active' : ''}`}
                              onClick={() => this.changeTab(5)}
                              to="#">Orcs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentTab === 6 ? 'active' : ''}`}
                              onClick={() => this.changeTab(6)}
                              to="#">Dwarves</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentTab === 7 ? 'active' : ''}`}
                              onClick={() => this.changeTab(7)}
                              to="#">Gnomes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.currentTab === 8 ? 'active' : ''}`}
                              onClick={() => this.changeTab(8)}
                              to="#">Halflings</Link>
                    </li>

                </ul>


                <hr />

                <div>
                    {this.state.currentTab === 0 &&
                        <HumanityBeforeAvantasia />
                    }
                    {this.state.currentTab === 1 &&
                        <AvantasiaBeforeHumanity />
                    }
                    {this.state.currentTab === 2 &&
                        <AMPTechnology />
                    }
                    {this.state.currentTab === 3 &&
                        <Humans />
                    }
                    {this.state.currentTab === 4 &&
                        <Elves />
                    }
                    {this.state.currentTab === 5 &&
                        <Orcs />
                    }
                    {this.state.currentTab === 6 &&
                        <Dwarves />
                    }
                    {this.state.currentTab === 7 &&
                        <Gnomes />
                    }
                    {this.state.currentTab === 8 &&
                        <Halflings />
                    }
                    
                </div>



            </div>
        );



    }
}
