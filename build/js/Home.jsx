import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import Player from './Player'
import RelatedVideos from './RelatedVideos'

const apiKey = 'AIzaSyBB9LBxNmwDosU6hf6-AsPJgoGc4TaTpUw'
const uploadPlaylistId = 'UUIi1h9LoV9fefFTucM8bRtw'

class Home extends Component {
  state = {
    videosLoaded: false,
    latestVideo: {},
    latestVideoId: '',
    videos: {}
  }
  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${uploadPlaylistId}&key=${apiKey}`
      )
      .then(response => {
        this.setState({
          latestVideo: response.data.items[0],
          latestVideoId: response.data.items[0].snippet.resourceId.videoId,
          videos: response.data.items.slice(1, 5),
          videosLoaded: true
        })
      })
  }
  render() {
    let RecentVideos
    if (this.state.videosLoaded) {
      RecentVideos = <RelatedVideos recent videos={this.state.videos} />
    } else {
      RecentVideos = ''
    }
    return (
      <div>
        <Header />
        <main id="content" role="main">
          <div className="main-content">
            <Player video={this.state.latestVideo} videoId={this.state.latestVideoId} />
            {RecentVideos}
            <div className="actions">
              <Link href="/videos" to="/videos" className="button">
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
