import React, { PureComponent } from 'react';

import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
