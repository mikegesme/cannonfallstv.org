import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import Player from './Player'

class Home extends Component {
  state = {
    videosLoaded: false,
    videos: {}
  }
  componentDidMount() {
    const channelId = 'UCIi1h9LoV9fefFTucM8bRtw'
    const apiKey = 'AIzaSyBB9LBxNmwDosU6hf6-AsPJgoGc4TaTpUw'
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&type=video&channelId=${channelId}&maxResults=25&key=${apiKey}`
      )
      .then(response => {
        this.setState({ videos: response.data.items, videosLoaded: true })
      })
  }
  render() {
    let PlayerComponent
    if (this.state.videosLoaded) {
      PlayerComponent = <Player video={this.state.videos[0]} />
    } else {
      PlayerComponent = ''
    }
    return (
      <div>
        <Header />
        <main id="content" role="main">
          <div className="home-content">
            {PlayerComponent}
            <ul className="recent-videos">
              <li>
                <a href="/">
                  <img src="https://i.ytimg.com/vi/6kkmgcauYcw/maxresdefault.jpg" alt="School Board" />
                  <div className="video-caption">
                    <span className="video-title">Video 2 Title</span>
                    <span className="video-date">Nov. 14, 2017</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="https://i.ytimg.com/vi/6kkmgcauYcw/maxresdefault.jpg" alt="School Board" />
                  <div className="video-caption">
                    <span className="video-title">Video 3 Title</span>
                    <span className="video-date">Nov. 14, 2017</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="https://i.ytimg.com/vi/6kkmgcauYcw/maxresdefault.jpg" alt="School Board" />
                  <div className="video-caption">
                    <span className="video-title">Video 4 Title</span>
                    <span className="video-date">Nov. 14, 2017</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="https://i.ytimg.com/vi/6kkmgcauYcw/maxresdefault.jpg" alt="School Board" />
                  <div className="video-caption">
                    <span className="video-title">Video 5 Title</span>
                    <span className="video-date">Nov. 14, 2017</span>
                  </div>
                </a>
              </li>
            </ul>
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
