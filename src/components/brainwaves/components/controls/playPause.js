import React, { Component } from 'react';
import './controls.css';

class PlayPause extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: true
        }
    }
    toggle() {
        let is_play = this.state.isPlay;
        this.props.playToggle(!is_play);
        this.setState({
            isPlay: !is_play
        })
    }

    replay() {
        this.props.replay();
    }

    render() {
        let slideEnd = this.props.slideEnd;
        let playPause = (<div className={this.state.isPlay ? 'pause' : 'play'} onClick={() => this.toggle()}></div>);
        let replay = (< div className="repeat" onClick={() => this.replay()} ><i className="fa fa-repeat fa-2x"></i></div >)
        if (slideEnd) {
            return replay;
        } else {
            return playPause;
        }
    }
}

export default PlayPause;