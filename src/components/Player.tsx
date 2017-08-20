import * as React from 'react';

export interface AppProps {
}

class App extends React.Component<AppProps, {}> {
  render() {
    return (
        <section className="section">
          <div id="waveform" />
              <h1 className="title">Playing now</h1>
              <h2 className="subtitle">
                <strong>Group</strong> - song
              </h2>
          </section>
    );
  }
}

export default App;
