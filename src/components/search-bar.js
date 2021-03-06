import React, { Component } from "react";
import "../App.css";

export default class SearchBar extends Component {
  // intializing the state in your class based component
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  // condensed version of an onChange event without having to call the method(function) in the component
  render() {
    return (
      <div className="searchbarDiv">
        <nav>
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
            className="searchBar"
            placeholder="Search"
          />
        </nav>
      </div>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
