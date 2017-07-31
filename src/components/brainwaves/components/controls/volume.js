import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import './controls.css';
import 'react-rangeslider/lib/index.css'

class VolumeSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      volume: 100,
      isMute: false
    }
  }
  
  componentDidMount() {
    console.log(this.state.volume);
  }

  handleOnChange = (value) => {
    this.setState({
      volume: value
    });
    this.props.audio.volume(value / 100);
  }

  toggleMute() {
    let isMute = this.state.isMute;
    this.setState({
      isMute: !isMute
    });
    this.props.audio.mute(!isMute);
  }

  render() {
    let { volume } = this.state
    let speakerStyle = {
      width: '10px',
      position: 'absolute',
      left: '220px',
      bottom: '1px'
    }
    return (
      <div>
        <div style={speakerStyle}>
          {this.state.isMute ? (<i className="fa fa-volume-up fa-2x" onClick={this.toggleMute.bind(this)}></i>) : (<i className="fa fa-volume-off fa-2x" onClick={this.toggleMute.bind(this)}></i>)}
        </div>
        {this.state.isMute ? null : <div className="responsive-volume"><Slider value={volume} onChange={this.handleOnChange} /></div>}
      </div>
    )
  }
}

export default VolumeSlider;