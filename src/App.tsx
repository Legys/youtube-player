import * as React from 'react'
import axios from 'axios'
import debounce from 'lodash/debounce';

import SearchBar from './components/SearchBar'
import Player from './components/Player'
import SongsList from './components/SongsList/SongsList'

import API_KEY from './config/youtubeAPI'

export interface AppProps {
}

interface AppState {
  searchString: string,
  songs: object[]
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      searchString: '',
      songs: []
    }
    this.handleSearchBarInput = this.handleSearchBarInput.bind(this)
  }
  handleSearchBarInput (string: string) {
    this.setState({ searchString: string })
    const debouncedAPICall = debounce(() => {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          q: string,
          maxResults: 5,
          part: 'snippet'
        }
      })
      .then(response => this.setState({songs: response.data}))
    }, 300)
    debouncedAPICall()
  }
  render() {
    return (
      <div className="root">
        <div className="container">
          <Player /> 
          <SearchBar handleSearchBarInput={this.handleSearchBarInput} />
          <SongsList songs={this.state.songs} />
        </div>
      </div>
    )
  }
}

export default App
