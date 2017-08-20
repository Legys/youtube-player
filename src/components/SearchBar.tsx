import * as React from 'react';

export interface AppProps {
  handleSearchBarInput: (e: string) => void
}

export interface AppProps {
}

export function SearchBar (props: AppProps) {
    return (
      <div className="field">
        <label className="label">Search a song</label>
          <div className="control">
            <input className="input"
                   type="text"
                   placeholder="Text input"
                   onInput={ (e: any ) => props.handleSearchBarInput(e.target.value) } />
        </div>
      </div>
    )
}

export default SearchBar;
