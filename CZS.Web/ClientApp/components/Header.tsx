import * as React from 'react';
import { Link } from 'react-router-dom';
import * as dotnetify from 'dotnetify';

export default class Header extends React.Component<any, any> {
    vm: any;

    constructor(props: any) {
        super(props);
        this.vm = dotnetify.react.connect('HeaderViewModel', this);
        this.state = { Username: '' }
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    render() {
        return (
            <div>

                Username: {this.state.Username}

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                    <Link className="navbar-brand" to="/">
                        Cyberpunk Zombie Survival <br />
                    </Link>

                    <div className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/features">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/downloads">Downloads</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://discord.gg/sg45eY8" target="_blank">Discord (Chat)</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="http://czs.wikia.com/" target="_blank">Wiki</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="http://czs.boards.net/" target="_blank">Forums</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://github.com/zunath/CyberpunkZombieSurvival_JVM" target="_blank">Source Code</Link>
                            </li>

                            {this.state.Username === '' || this.state.Username === null || this.state.Username === undefined ?

                                <li className="nav-item pull-right">
                                    <a className="nav-link" href="/Discord/Login">Login (With Discord)</a>
                                </li> :
                                <li className="nav-item pull-right">
                                    <Link className="nav-link" to="#">{this.state.Username}</Link>
                                </li>
                            }
                        </ul>
                    </div>


                </nav>
            </div>
        );



    }
}
