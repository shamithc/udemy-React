import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDOWC4EQ72yLXG-5Rx1QmvMyhVkuEYkg_4';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
          videos: [],
          selectedVideo: null
        };

        this.videoSearch(this.initialTerm());
    }

    videoSearch(term){
      YTSearch(
          {key: API_KEY, term: term }, videos => {
              this.setState({
                videos: videos,
                selectedVideo: videos[0]
              });
          }
      );
    }

    initialTerm(){
      const term = 'rihana';
      return term;
    }

    render(){
        return (
            <div>
                <SearchBar videoSearch={(term) => this.videoSearch(term)} initialTerm={this.initialTerm()}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={(selectedVideo)=> this.setState({selectedVideo})} videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
