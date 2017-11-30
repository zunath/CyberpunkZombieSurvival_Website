import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

export class Layout extends React.Component<{}, {}> {

    
    render() {
        return <div>
            <Header />

            <div className="row">&nbsp;</div>

            <div className="container-fluid">
                <div className="row">
                    {this.props.children}
                </div>
            </div>

            <Footer />
            
        </div>;
    }
}
