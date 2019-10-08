import React from 'react';
import AppContainer from './Root/navigation';

type Props = {};
export default class AppComponent extends React.Component <Props> {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <AppContainer/>
        );
    }
}