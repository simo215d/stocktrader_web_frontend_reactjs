import React, { Component } from "react";

class MarketSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInputChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchCallback(this.state.searchInput);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="text-white">Search for a stock:</label>
          <input
            id="searchinput"
            type="text"
            className="form-control"
            placeholder="enter stock symbol"
            value={this.state.searchInput}
            onChange={this.handleSearchInputChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary w-100 mt-2"
          value={"Search"}
        />
      </form>
    );
  }
}

export default MarketSearchForm;
