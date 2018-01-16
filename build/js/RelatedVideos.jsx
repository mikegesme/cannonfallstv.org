/* eslint react/prop-types: 0 */
import React from 'react'
import moment from 'moment'

const RelatedVideos = props => (
  <ul className="recent-videos">
    {props.videos.slice(0, 4).map(video => (
      <li>
        <a href={props.recent ? `/watch/${video.snippet.resourceId.videoId}` : `/watch/${video.id.videoId}`}>
          <img src={video.snippet.thumbnails.medium.url} alt="School Board" />
          <div className="video-caption">
            <span className="video-title">{video.snippet.title}</span>
            <span className="video-date">Published on {moment(video.snippet.publishedAt).format('MMM D, YYYY')}</span>
          </div>
        </a>
      </li>
    ))}
  </ul>
)

export default RelatedVideos
