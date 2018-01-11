import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import Header from './Header'
import Player from './Player'

class Home extends Component {
  state = {
    videosLoaded: false,
    videos: {}
  }
  componentDidMount() {
    // const channelId = 'UCIi1h9LoV9fefFTucM8bRtw'
    const apiKey = 'AIzaSyBB9LBxNmwDosU6hf6-AsPJgoGc4TaTpUw'
    const uploadPlaylistId = 'UUIi1h9LoV9fefFTucM8bRtw'
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${uploadPlaylistId}&key=${apiKey}`
      )
      .then(response => {
        this.setState({ videos: response.data.items, videosLoaded: true })
      })
  }
  render() {
    let PlayerComponent
    let RecentVideos
    if (this.state.videosLoaded) {
      PlayerComponent = <Player video={this.state.videos[0]} />
      RecentVideos = (
        <ul className="recent-videos">
          {this.state.videos.slice(1, 5).map(video => (
            <li>
              <a href="/">
                <img src={video.snippet.thumbnails.medium.url} alt="School Board" />
                <div className="video-caption">
                  <span className="video-title">{video.snippet.title}</span>
                  <span className="video-date">
                    Published on {moment(video.snippet.publishedAt).format('MMM D, YYYY')}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )
    } else {
      PlayerComponent = ''
      RecentVideos = ''
    }
    return (
      <div>
        <Header />
        <main id="content" role="main">
          <div className="home-content">
            {PlayerComponent}
            {RecentVideos}
            <div className="actions">
              <Link href="/watch" to="/watch" className="button">
                More Videos
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Home
