import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <img alt="sdf" src={this.props.src} width="100%"/> 
        );
    }
}

export default Content;