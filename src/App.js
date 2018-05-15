import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search-bar";
import VideoList from "./components/video-list";
import VideoDetail from "./components/video-details";
import "./App.css";
import youtubeKey from "./keys.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       videos: [],
       selectedVideo: null
     };

    YTSearch({ key: youtubeKey, term: "surfboards" }, videos => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
       });
      console.log(videos);
    });
  }
  //this.setState({ videos: videos })

  render() {
    return (
      <div className="container-fluid">
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
