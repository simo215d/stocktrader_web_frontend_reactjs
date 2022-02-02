import React, { Component } from "react";

class MarketResult extends Component {
  constructor() {
    super();
    this.state = { qty: -1 };
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.buy = this.buy.bind(this);
  }

  handleQtyChange(event) {
    this.setState({ qty: event.target.value });
  }

  buy(event) {
    event.preventDefault();
    if (this.state.qty < 1) {
      alert("Quantity must be > 0");
      return;
    }
    if (this.state.qty % 1 > 0) {
      alert("Quantity must be a whole number");
      return;
    }
    //send buy request
    //if success -> call parent reload
    var url =
      "http://" + process.env.REACT_APP_BACKEND_ADDRESS + ":8000/stocks/order";

    var httprequest = new XMLHttpRequest();
    httprequest.open("POST", url, true);
    httprequest.setRequestHeader("Content-Type", "application/json");
    var symbol = this.props.stock.symbol;
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
        symbol,
        qty: this.state.qty,
        side: "buy",
        type: "market",
        time_in_force: "day",
      })
    );
  }

  render() {
    return (
      <div className="card text-center mt-4 mb-5">
        <div className="card-header">Result</div>
        <div className="card-body">
          <h5 className="card-title">{this.props.stock.name}</h5>
          <p className="card-text">
            Symbol: {this.props.stock.symbol} <br />
            Price: {this.props.price}$
          </p>
          <form className="form-inline" onSubmit={this.buy}>
            <div className="form-group mx-sm-3 mb-2">
              <label className="sr-only">Buy the stock</label>
              <input
                type="number"
                className="form-control"
                placeholder="Quantity"
                onChange={this.handleQtyChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Place market order
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default MarketResult;
