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
    var url = "http://" + process.env.REACT_APP_BACKEND_ADDRESS + ":8000/stocks/order";

    var httprequest = new XMLHttpRequest();
    httprequest.open("POST", url, true);
    httprequest.setRequestHeader("Content-Type", "application/json");
    var symbol = this.state.position.symbol;
    httprequest.onreadystatechange = function () {
      //Call a function when the state changes.
      if (httprequest.readyState === 4 /* && httprequest.status === 200*/) {
        if (httprequest.status === 200) {
          alert("A sell order for " + symbol + " has been placed!");
        } else {
          alert(
            "An error ocurred. Maybe all your " +
              symbol +
              " stocks are already trading. Try again later."
          );
        }
        //console.log(httprequest.responseText);
        //alert(JSON.stringify(httprequest.responseText));
      }
    };
    httprequest.send(
      //stocks/order?symbol=MSFT&qty=1&side=buy&type=market&time_in_force=day
      JSON.stringify({
        symbol: this.state.position.symbol,
        qty: 1,
        side: "sell",
        type: "market",
        time_in_force: "day",
      })
    );
  }

  buy() {
    //send buy request
    //if success -> call parent reload
    var url = "http://" + process.env.REACT_APP_BACKEND_ADDRESS + ":8000/stocks/order";

    var httprequest = new XMLHttpRequest();
    httprequest.open("POST", url, true);
    httprequest.setRequestHeader("Content-Type", "application/json");
    var symbol = this.state.position.symbol;
    httprequest.onreadystatechange = function () {
      //Call a function when the state changes.
      if (httprequest.readyState === 4 /* && httprequest.status === 200*/) {
        if (httprequest.status === 200) {
          alert("A buy order for " + symbol + " has been placed!");
        } else {
          alert(
            "An error ocurred. Maybe all your " +
              symbol +
              " stocks are already trading. Try again later."
          );
        }
        //console.log(httprequest.responseText);
        //alert(JSON.stringify(httprequest.responseText));
      }
    };
    httprequest.send(
      //stocks/order?symbol=MSFT&qty=1&side=buy&type=market&time_in_force=day
      JSON.stringify({
        symbol: this.state.position.symbol,
        qty: 1,
        side: "buy",
        type: "market",
        time_in_force: "day",
      })
    );
  }

  render() {
    let plpc = this.state.position.unrealized_plpc * 100;
    let plpcSmaller = (plpc + "").substring(0, 4);
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
        <td>{plpcSmaller}%</td>
      </tr>
    );
  }
}

export default Portfolio;
