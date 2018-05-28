import React, { PureComponent } from 'react';

import SearchBar from '../containers/search_bar'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
