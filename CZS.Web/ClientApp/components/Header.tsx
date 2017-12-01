import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
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
                    <a className="navbar-brand" href="#">Cyberpunk Zombie Survival</a>

                    <div className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/downloads">Downloads</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://discord.gg/sg45eY8" target="_blank">Discord (Chat)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://czs.wikia.com/" target="_blank">Wiki</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://czs.boards.net/" target="_blank">Forums</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/zunath/CyberpunkZombieSurvival_JVM" target="_blank">Source Code</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admin">Admin</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );



    }
}
