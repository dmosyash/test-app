import React, { Component } from 'react';
import './controls.css';

class PreviousButton extends Component {
    
    onPrevious() {
        let current = this.props.currentIndex;
        this.props.gotoIndex(current-1);
    }

    render() {
        let previousButtonStyle = {
            position: 'absolute',
            bottom: '0px',
            left: '0px'
        }
        return (
            <button className="buttons" style={previousButtonStyle} onClick={() => this.onPrevious()}>&laquo; Previous</button>
        )
    }
}

export default PreviousButton;