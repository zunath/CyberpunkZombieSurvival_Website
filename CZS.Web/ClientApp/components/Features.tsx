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
                <h2 className="center">Features</h2>
            </div>
        );



    }
}
