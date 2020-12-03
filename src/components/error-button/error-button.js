import React from 'react';

export default class ErrorButton extends React.Component {

    state = {
        renderError: false
    }

    render() {

        console.log('error');
        if (this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
            <button onClick={() => this.setState({ renderError: true })}>Error Button</button>
        )
    }
}