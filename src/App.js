import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import './App.css';
const API_KEY = 'AIzaSyBW8l80elLwlM-WNwcJaRjTt-WRBhLRM5Q';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      console.log(videos)
    });
  }
  //this.setState({ videos: videos })


  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
