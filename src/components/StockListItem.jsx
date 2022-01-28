import React, { Component } from "react";

class StockListItem extends Component {
  render() {
    return (
      <div>
        <button>Buy</button>
        <button>Sell</button>
        <p>MSFT</p>
        <p>Stock price: 300 $</p>
        <p>Amount: 3</p>
        <p>Unrealised gain: 24%</p>
      </div>
    );
  }
}

export default StockListItem;
