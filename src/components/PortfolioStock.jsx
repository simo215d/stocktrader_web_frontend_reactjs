import React, { Component } from "react";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: props.position,
    };
    this.sell = this.sell.bind(this);
    this.buy = this.buy.bind(this);
  }

  sell() {
    //send sell request
    //if success -> call parent reload
    var url = "https://reqbin.com/echo/post/json";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        alert("wow response: " + xhr.responseText);
      }
    };

    var data =
      '{   "symbol": "' + this.state.position.symbol + '",   "qty": 1}';

    xhr.send(data);
  }

  buy() {
    alert("xd");
  }

  render() {
    return (
      <tr>
        <td>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={this.buy}
          >
            Buy
          </button>
          <button
            type="button"
            className="btn btn-danger m-1"
            onClick={this.sell}
          >
            Sell
          </button>
        </td>
        <td>{this.state.position.symbol}</td>
        <td>{this.state.position.qty}</td>
        <td>{this.state.position.cost_basis}</td>
        <td>{this.state.position.current_price}</td>
        <td>{this.state.position.unrealized_plpc * 100}%</td>
      </tr>
    );
  }
}

export default Portfolio;
