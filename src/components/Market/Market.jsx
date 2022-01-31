import React, { Component } from "react";
import MarketResult from "./MarketResult";
import MarketSearchForm from "./MarketSearchForm";

class Market extends Component {
  constructor() {
    super();
    this.state = { stock: null, price: -1 };
    this.searchCallback = this.searchCallback.bind(this);
  }

  searchCallback(searchInput) {
    if (searchInput === "") {
      alert("invalid input");
      return;
    }
    //get the stock (price not included!)
    var url = "http://localhost:3000/stocks?symbol=" + searchInput;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 500) {
          alert("could not find that stock!");
        }
        if (xhr.status === 200) {
          //alert(xhr.responseText);
          this.setState({
            stock: JSON.parse(xhr.responseText),
            price: this.state.price,
          });
          //alert(JSON.stringify(this.state));

          //get price of stock
          var url2 = "http://localhost:3000/stocks/price?symbol=" + searchInput;
          var xhr2 = new XMLHttpRequest();
          xhr2.onreadystatechange = () => {
            if (xhr2.readyState === XMLHttpRequest.DONE) {
              if (xhr2.status === 500) {
                //alert("could not find that stock!");
              }
              if (xhr2.status === 200) {
                //alert(xhr2.responseText);
                this.setState({
                  stock: this.state.stock,
                  price: JSON.parse(xhr2.responseText),
                });
                //alert(JSON.stringify(this.state));
              }
            }
          };
          xhr2.open("GET", url2, true);
          xhr2.send(null);
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send(null);
  }

  render() {
    var displayResult = "";
    //alert("price: " + JSON.stringify(this.state.price));
    if (this.state.stock !== null && this.state.price !== -1) {
      displayResult = (
        <MarketResult stock={this.state.stock} price={this.state.price} />
      );
    }
    return (
      <div className="row justify-content-md-center mt-5">
        <div className="col-3 justify-content-center d-flex flex-column">
          <h1 className="text-white text-center">Market</h1>
          <MarketSearchForm searchCallback={this.searchCallback} />
          {displayResult}
        </div>
      </div>
    );
  }
}

export default Market;
