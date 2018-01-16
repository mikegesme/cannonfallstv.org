import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import Header from './Header'

const uploadPlaylistId = 'UUIi1h9LoV9fefFTucM8bRtw'
const apiKey = 'AIzaSyBB9LBxNmwDosU6hf6-AsPJgoGc4TaTpUw'

class Videos extends Component {
  state = {
    videos: []
  }
  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=32&playlistId=${uploadPlaylistId}&key=${apiKey}`
      )
      .then(response => {
        this.setState({
          videos: response.data.items
        })
      })
  }
  render() {
    const { videos } = this.state
    const videoList = videos.map(video => (
      <div className="video-thumbnail">
        <a href={`/watch/${video.snippet.resourceId.videoId}`}>
          <img src={video.snippet.thumbnails.medium.url} alt="School Board" />
          <div className="video-caption">
            <span className="video-title">{video.snippet.title}</span>
            <span className="video-date">{moment(video.snippet.publishedAt).format('MMM D, YYYY')}</span>
          </div>
        </a>
      </div>
    ))

    return (
      <div>
        <Header />
        <main id="content" role="main">
          <div className="main-content">
            <div className="video-list">{videoList}</div>
          </div>
        </main>
      </div>
    )
  }
}

export default Videos
