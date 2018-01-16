/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import Player from './Player'
import RelatedVideos from './RelatedVideos'

const apiKey = 'AIzaSyBB9LBxNmwDosU6hf6-AsPJgoGc4TaTpUw'
const channelId = 'UCIi1h9LoV9fefFTucM8bRtw'

class Watch extends Component {
  state = {
    video: {},
    videoId: '',
    relatedVideos: []
  }

  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?id=${
          this.props.match.params.id
        }&key=${apiKey}&fields=items(id,snippet(title,description,publishedAt,tags))&part=snippet`
      )
      .then(response => {
        this.setState({ video: response.data.items[0], videoId: response.data.items[0].id })
        const term = response.data.items[0].snippet.tags[7]
        axios
          .get(
            `https://www.googleapis.com/youtube/v3/search?q=${term}&channelId=${channelId}&key=${apiKey}&part=snippet&maxResults=5&order=date`
          )
          .then(response1 => {
            response1.data.items.forEach((num, index) => {
              console.log(index)
              console.log(response1.data.items[index].id.videoId)
              if (response1.data.items[index].id.videoId === this.state.videoId) {
                console.log('match!')
                response1.data.items.splice(index, 1)
              }
            })
            this.setState({ relatedVideos: response1.data.items })
          })
      })
  }
  render() {
    return (
      <div>
        <Header />
        <main id="content" role="main">
          <div className="main-content">
            <Player video={this.state.video} videoId={this.state.videoId} />
            <RelatedVideos videos={this.state.relatedVideos} />
          </div>
        </main>
      </div>
    )
  }
}

export default Watch
