import React, { Component } from 'react';
import PreviousButton from './previousButton.js';
import NextButton from './nextButton.js';
import PlayPause from './playPause.js';
import Fullscreen from './fullscreen.js';
import VolumeSlider from './volume.js';
import './controls.css';

class ControlBox extends Component {

    render() {
        let controlBoxStyle = {
            position: 'relative',
            bottom: '5px',
            height: '20px',
            backgroundColor: 'black',
            textDecoration: 'none',
            padding: '8px'
        }
        return (
            <div style={controlBoxStyle} >
                 <PreviousButton gotoIndex={this.props.gotoIndex} currentIndex={this.props.currentIndex} />
                <PlayPause playToggle={this.props.playToggle} replay={this.props.replay} slideEnd={this.props.slideEnd} />
                <NextButton gotoIndex={this.props.gotoIndex} currentIndex={this.props.currentIndex} />
                <Fullscreen canvas={this.props.canvas} />
                 <VolumeSlider audio={this.props.audio}/>  
            </div>
        )
    }
}

export default ControlBox;