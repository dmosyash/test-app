import React, { Component } from 'react';
import Content from './components/content';
import contentList from './components/contentList';
import ControlBox from './components/controls/controlBox';
import { Howl } from 'howler';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

class Brainwaves extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: contentList[0],
      showControls: 'none'
    }
    this.audio = null;
    this.hover = false;
    this.slideEnd = false;   
    this.volume = 1; 
  }

  componentDidMount() {
    this.audio = new Howl({
        src: contentList[0].audio,
        onend: this.onAudioEnd.bind(this)
    });
    this.audio.play();
  }

  componentWillUnmount() {
      this.audio.stop();
  }

  onAudioEnd() {
    this.slideEnd = true;
    this.setState({
      showControls: 'block',
      suggestions: (
        <div className="suggestions">
          { this.listOfContents() }
        </div>
      )
    });
  }

  hoverStart() {
    if(this.slideEnd) {
      return;
    }
    clearTimeout(this.controlTimer);
    this.hover = true;
    this.setState({ showControls: 'block' });
    this.controlTimer = setTimeout(function () {
      if (this.slideEnd) {
        return;
      }
      this.hover = false;
      this.setState({ showControls: 'none' });
    }.bind(this), 3000);
  }

  gotoIndex(index) {
    this.selectedContent(contentList[index]);
  }

  playPauseToggle(bool) {
    if(!bool) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }

  replay() {
    this.slideEnd = false;
    this.audio.play();
    this.setState({
      showControls: 'none',
      suggestions: null
    });
  }

  selectedContent(item) {
    this.setState({
      content: item,
      showControls: 'none',
      suggestions: null
    });
    this.audio.stop();
    this.audio = new Howl({
        src: item.audio,
        onend: this.onAudioEnd.bind(this)
    });
    this.audio.play();
    this.audio.volume(this.volume);
    this.slideEnd = false;
  }

  setVolume(volume) {
    this.volume = volume;
  }

  listOfContents() {
    return contentList.map((v) => {
      return (
        <div key={v.id} className="list-contents" style={{border: '1px solid'}} onClick={() => this.selectedContent(v)}>
          <h5>{v.name}</h5>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={8}>               
               <div className="content-holder" onMouseMove={() => this.hoverStart()} ref={(input) => {this.canvas = input}}>
                <Content src={this.state.content.image} />
                <div className="controls" style={{ display: this.state.showControls }}>
                   <ControlBox gotoIndex={this.gotoIndex.bind(this)} currentIndex={this.state.content.order} playToggle={this.playPauseToggle.bind(this)} slideEnd={this.slideEnd} replay={this.replay.bind(this)} canvas={this.canvas} audio={this.audio} setVolume={this.setVolume.bind(this)} /> 
                </div> 
                 { this.state.suggestions } 
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <h3>BRAINWAVES</h3>
              <div style={{ margin: '20px' }}>{this.listOfContents()}</div> 
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Brainwaves;