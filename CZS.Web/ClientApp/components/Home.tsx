import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';

export default class Home extends React.Component<RouteComponentProps<{}>, any> {
    vm : any;

    constructor(props: any) {
        super(props);
        //this.vm = dotnetify.react.connect('HomeViewModel', this);
        this.state = { }
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    render() {
        return (
            <div>

            </div>
        );



    }
}
