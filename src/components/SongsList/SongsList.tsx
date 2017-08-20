import * as React from 'react';
import Item from './Item'

export interface AppProps {
  songs: object[]
}

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <ul>
        <Item />
      </ul>
    )
  }
}

export default App
