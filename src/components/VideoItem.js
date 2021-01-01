import React from 'react';
import './VideoItem.css';
var decode = require('unescape');

const VideoItem = ({ video, onVideoSelect }) => {
    return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img
          alt={decode(video.snippet.title)}
          className="ui image"
          src={video.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">{decode(video.snippet.title)}</div>
        </div>
      </div>
    );
}

export default VideoItem;