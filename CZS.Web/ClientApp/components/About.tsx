import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as dotnetify from 'dotnetify';

export default class About extends React.Component<RouteComponentProps<{}>, any> {

    constructor(props: any) {
        super(props);
        dotnetify.react.connect('AboutViewModel', this);
        this.state = { TestValue: '' }
    }

    public render() {
        return (
            <div>
                About
            </div>
        );



    }
}
