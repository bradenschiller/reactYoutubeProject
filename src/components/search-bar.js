import React, { Component } from 'react';
import '../App.css';


export default class SearchBar extends Component {
  // intializing the state in your class based component
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // condensed version of an onChange event without having to call the method(function) in the component
  render() {
    return(
      <div>
        <input
          value={this.state.term}
         onChange={event => this.setState({ term: event.target.value })} className="searchBar" placeholder="search" />
      </div>
    )
  }
}
