import React, { Component } from 'react';
import './controls.css';

class NextButton extends Component {
    
    onNext() {
        let current = this.props.currentIndex;
        this.props.gotoIndex(current+1);
    }

    render() {
        let nextButtonStyle = {
            position: 'absolute',
            bottom: '0px',
            left: '135px'
        }
        return (
            <button className="buttons" style={nextButtonStyle} onClick={() => this.onNext()}>Next &raquo;</button>
        )
    }
}

export default NextButton;