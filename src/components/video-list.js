import React from "react";
import VideoListItem from "./video-list-item";

const VideoList = props => {
  const videoitems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-4 list-group">{videoitems}</ul>;
};

export default VideoList;
