import React, { Component } from 'react';
import Frame from './frames';
import axios from 'axios';
// import { frameList } from './dataService';
import { Howl } from 'howler';
import './App.css';

class Board extends Component {
    constructor (props) {
        super(props);
        this.state = {
            frameList: [],
            loading: true
        };
        this.id = null;
        this.getFrames();
    }

    componentDidMount() {
        this.catchAudio = new Howl({
            src: ['http://first.laughguru.com/assets/audio/Positive-Bingo.wav']
        });
        this.repelAudio = new Howl({
            src: ['http://first.laughguru.com/assets/audio/Negative-Buzzer.wav']
        });
    }

    getFrames() {
        axios.get('https://staging.server.laughguru.com/content/click_to_learn_button/?click_to_learn__interaction__content=6107', { headers: {'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluQGxhdWdoZ3VydS5jb20iLCJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGxhdWdoZ3VydS5jb20iLCJleHAiOjE1Mjc4MzgyMjF9.5mW22jytX217GCmOcbf_0YqaXN3VBlxsvFc8ibgcmtE'}})
        .then(res => {
            this.setState({
                frameList: res.data,
                loading: false
            });
        });
    }

    droppedSound(hasItemCatched) {
        if (hasItemCatched) {
            this.catchAudio.stop(this.id);
            this.repelAudio.stop(this.id);
            this.id = this.catchAudio.play();
        } else {
            this.repelAudio.stop(this.id);
            this.catchAudio.stop(this.id);
            this.id = this.repelAudio.play();
        }
    }

    renderFrames() {
        return this.state.frameList.map((frame, i) => {
            return (
                <Frame key={frame.id} name={frame.name} index={i + 1} x1={frame.x1} y1={ frame.y1 } width={ frame.width } height={ frame.height } droppedFn={ this.droppedSound.bind(this) } />
            );
        });
    }

    render() {
        return(
            <div>
                <div style={{
                    position: 'relative',
                    width: '960px',
                    height: '540px',
                    display: this.state.loading ? 'none' : 'block',
                    backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media-dev/resources/click_to_learn/6107/whatsapp-image-2017-06-15-at-113028-am.jpeg)`
                }}>
                    { this.renderFrames() }
                </div>
                { this.state.loading ? (<h3>Loading...</h3>) : null }
            </div>
        );
    };
}

export default Board;