import * as React from 'react';
import { Link } from 'react-router-dom';
import * as dotnetify from 'dotnetify';

export default class Header extends React.Component<any, any> {
    vm: any;

    constructor(props: any) {
        super(props);
        this.vm = dotnetify.react.connect('HeaderViewModel', this);
        this.state = {}
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    public render() {
        return (
            <div>
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
                        </ul>
                    </div>


                </nav>
            </div>
        );



    }
}
