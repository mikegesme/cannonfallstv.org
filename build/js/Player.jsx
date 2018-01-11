import React, { Component } from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
import moment from 'moment'

class Player extends Component {
  propTypes = {
    video: PropTypes.element.isRequired
  }

  state = {
    loaded: true
  }

  onReady = () => {
    this.setState({ loaded: true })
    console.log(this.props.video)
  }
  render() {
    const opts = {
      height: '1080',
      width: '1920',
      // videoId: result.items[0].snippet.resourceId.videoId,
      playerVars: {
        modestbranding: 1,
        rel: 0,
        color: 'white',
        showinfo: 0
      }
      //   events: {
      //     onReady: onPlayerReady,
      //     onStateChange: onPlayerStateChange
      //   }
    }
    // const publishedDate = new Date(this.props.video.snippet.publishedAt)
    // const displayDate = `${publishedDate.getDay() + 1}`

    return (
      <div className={`video video-hero fullwidth ${this.state.loaded ? 'loaded' : 'notloaded'}`}>
        <div className="player-container">
          <div className="player-wrapper">
            <span>Loading video...</span>
            <YouTube videoId={this.props.video.id.videoId} opts={opts} onReady={this.onReady} />
          </div>
        </div>
        <div className="video-caption">
          <span className="video-title">{this.props.video.snippet.title}</span>
          <span className="video-date">
            Published on {moment(this.props.video.snippet.publishedAt).format('MMM D, YYYY')}
          </span>
          <span className="video-description">{this.props.video.snippet.description}</span>
        </div>
      </div>
    )
  }
}

export default Player
