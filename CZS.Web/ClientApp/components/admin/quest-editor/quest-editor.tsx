import * as React from 'react';
import * as dotnetify from 'dotnetify';

export default class QuestEditor extends React.Component<any, any> {
    vm: any;

    constructor(props: any) {
        super(props);
        this.vm = dotnetify.react.connect('QuestEditorViewModel', this);
        this.state = {  }
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
