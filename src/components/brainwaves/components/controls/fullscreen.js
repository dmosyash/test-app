import React, { Component } from 'react';
import './controls.css';

class Fullscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFullscreen: false
        }
    }
    toggleFullscreen() {
        let isFullscreen = this.state.isFullscreen;
        // this.props.playToggle(!is_play);
        if(isFullscreen) {
            this.button.classList.remove("animated");
            this.animationFrom.beginElement();
            this.normalScreen();
        } else {
            this.button.classList.add("animated");
            this.animationTo.beginElement();
            this.fullScreen();
        }
        this.setState({
            isFullscreen: !isFullscreen
        })
    }

    fullScreen() {
        let elem = this.props.canvas;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        window.screen.orientation.lock('landscape').then(null, function(error) {
            console.log(error);
        // document.exitFullscreen()
        });
    }

    normalScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        window.screen.orientation.unlock();
    }

    render() {
        let fullscreenStyle = {
            textDecoration: 'none',
            display: 'inline-block',
            backgroundColor: 'transparent',
            color: 'white',
            padding: '8px 8px',
            position: 'absolute',
            bottom: '-10px',
            right: '0px'
        }
        return (   
            <div style={fullscreenStyle}>         
            <div id="button" ref={(input) => this.button = input} onClick={() => this.toggleFullscreen()}>

  <svg viewBox="0 0 24 24">

    <path id="play" fill="white" d="m 3.4285714,15.428571 -3.42857145,0 0,8.571429 8.57142905,0 0,-3.428571 -5.1428577,0 0,-5.142858 z M -5e-8,8.5714287 l 3.42857145,0 0,-5.1428573 5.1428577,0 L 8.5714291,0 -4.9999999e-8,0 l 0,8.5714287 z M 20.571428,20.571429 l -5.142857,0 0,3.428571 L 24,24 l 0,-8.571429 -3.428572,0 0,5.142858 z M 15.428571,2e-7 l 0,3.4285714 5.142857,0 0,5.1428571 3.428572,0 L 24,2e-7 l -8.571429,0 z">

       <animate id="animation-to" ref={(input) => {this.animationTo = input}} begin="indefinite" fill="freeze" attributeName="d" dur="0.15s" 
               to="m 5.0000001e-8,18.857143 5.14285695,0 0,5.142857 3.428572,0 0,-8.571429 -8.571428950000001,0 0,3.428572 z M 5.142857,5.1428572 l -5.14285695,0 0,3.4285714 8.571428949999999,0 0,-8.571428500000001 -3.428572,0 0,5.142857100000001 z M 15.428571,24 l 3.428572,0 0,-5.142857 5.142857,0 0,-3.428572 -8.571429,0 0,8.571429 z m 3.428572,-18.8571428 0,-5.1428571 -3.428572,0 0,8.5714285 8.571429,0 0,-3.4285714 -5.142857,0 z" /> 
     

       <animate id="animation-from" ref={(input) => {this.animationFrom = input}} begin="indefinite" fill="freeze" attributeName="d" dur="0.15s" to="m 3.4285714,15.428571 -3.42857145,0 0,8.571429 8.57142905,0 0,-3.428571 -5.1428577,0 0,-5.142858 z M -5e-8,8.5714287 l 3.42857145,0 0,-5.1428573 5.1428577,0 L 8.5714291,0 -4.9999999e-8,0 l 0,8.5714287 z M 20.571428,20.571429 l -5.142857,0 0,3.428571 L 24,24 l 0,-8.571429 -3.428572,0 0,5.142858 z M 15.428571,2e-7 l 0,3.4285714 5.142857,0 0,5.1428571 3.428572,0 L 24,2e-7 l -8.571429,0 z" /> 

    </path>

  </svg>

</div>
            </div>
        )
    }
}

export default Fullscreen;