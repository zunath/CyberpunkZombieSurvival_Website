import * as React from 'react';
import * as dotnetify from 'dotnetify';

export default class Features extends React.Component<any, any> {
    vm: any;

    constructor(props: any) {
        super(props);
        this.vm = dotnetify.react.connect('FeaturesViewModel', this);
        this.state = {  }
    }
    
    componentWillUnmount() {
        this.vm.$destroy();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <h2 className="center">Features</h2>
                    </div>
                </div>

                <div className="row">&nbsp;</div>

                <div className="row"> 
                    <div className="col-3">

                        <div className="list-group sidebar" id="topics">

                            <a href="/features#story" className="list-group-item list-group-item-action">
                                Story
                            </a>
                            <a href="/features#character-progression" className="list-group-item list-group-item-action">
                                Character Progression
                            </a>
                            <a href="/features#structure-building" className="list-group-item list-group-item-action">
                                Structure Building
                            </a>
                            <a href="/features#magic-and-abilities-system" className="list-group-item list-group-item-action">
                                Magic + Abilities System
                            </a>
                            <a href="/features#survival" className="list-group-item list-group-item-action">
                                Survival
                            </a>
                        </div>

                    </div>

                    <div className="col-9">
                        <div data-spy="scroll" data-target="#topics" data-offset="0">
                            <h4 className="center" id="story">Story</h4>
                            <p>
                                
                            </p>
                            <h4 className="center" id="character-progression">Character Progression</h4>
                            <p>
                                
                            </p>
                            <h4 className="center" id="structure-building">Structure Building</h4>
                            <p>
                                
                            </p>
                            <h4 className="center" id="magic-and-abilities-system">Magic + Abilities System</h4>
                            <p>
                                
                            </p>
                            <h4 className="center" id="survival">Survival</h4>
                            <p>
                                
                            </p>

                        </div>
                        
                    </div>

                </div>

            </div>
        );



    }
}
