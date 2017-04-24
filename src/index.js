import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyBVMWVkywzYQM4ABbc38BBrQdgW-1x3RAM'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = { videos: [] }
    var self = this
    
    YTSearch({key: API_KEY, term: 'surfboards'}, function (videos) {
      self.setState({ videos })
    });
  }

  render() {



    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos } />     
      </div>
      )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))