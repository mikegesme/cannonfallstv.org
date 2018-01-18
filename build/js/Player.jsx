import React, { Component } from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
import moment from 'moment'

class Player extends Component {
  state = {
    loaded: true
  }

  onReady = () => {
    this.setState({ loaded: true })
  }
  render() {
    const opts = {
      height: '1080',
      width: '1920',
      playerVars: {
        modestbranding: 1,
        rel: 0,
        color: 'white',
        showinfo: 0,
        autoplay: this.props.autoplay
      }
    }

    let embed
    let details
    if (this.props.video.snippet) {
      embed = <YouTube videoId={this.props.videoId} opts={opts} onReady={this.onReady} />
      details = (
        <div>
          <span className="video-title">{this.props.video.snippet.title}</span>
          <span className="video-date">
            Published on {moment(this.props.video.snippet.publishedAt).format('MMM D, YYYY')}
          </span>
          <span className="video-description">{this.props.video.snippet.description}</span>
        </div>
      )
    }

    return (
      <div className={`video video-hero fullwidth ${this.state.loaded ? 'loaded' : 'notloaded'}`}>
        <div className="player-container">
          <div className="player-wrapper">
            <span>Loading video...</span>
            {embed}
          </div>
        </div>
        <div className="video-caption">
          <div className="video-caption-wrapper">{details}</div>
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  autoplay: PropTypes.bool,
  videoId: PropTypes.string.isRequired,
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  }).isRequired
}

Player.defaultProps = {
  autoplay: false
}

export default Player
