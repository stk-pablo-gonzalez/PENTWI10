import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AppContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: "my title"
        };
    }

    render() {
        return (
            <div>App!</div>
        );
    }
}

export default AppContainer;