import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBVMWVkywzYQM4ABbc38BBrQdgW-1x3RAM';

const App = () =>  {
  return (
    <div>
      <SearchBar />     
    </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'))