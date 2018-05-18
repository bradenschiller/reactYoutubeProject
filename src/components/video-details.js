import React from "react";
import "../App.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  // creates an emeded youtube video for the iframe
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="videoDetail col-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item embed-video" src={url} />
      </div>
      <div className="details">
        <h4>{video.snippet.title}</h4>
        <div className="description-tag-video-deatails">Description:</div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
