import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import PortfolioStock from "./PortfolioStock";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { positions: [], buyingPower: -1 };
    this.loadBuyingPower = this.loadBuyingPower.bind(this);
    this.loadPositions = this.loadPositions.bind(this);
  }

  //this is called after the component is rendered in DOM tree, since we cant update state inside constructor
  componentDidMount() {
    this.loadBuyingPower();
    this.loadPositions();
  }

  loadBuyingPower() {
    var url = "http://localhost:3000/account";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        var BP = JSON.parse(xhr.responseText).buying_power;
        this.setState({
          positions: this.state.positions,
          buyingPower: BP,
        });
      }
    };
    xhr.open("GET", url, true);
    xhr.send(null);
  }

  loadPositions() {
    var loadedPositions = null;
    var url = "http://localhost:3000/account/positions";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        //alert(xhr.responseText);
        loadedPositions = JSON.parse(xhr.responseText);
        this.setState({
          positions: loadedPositions,
          buyingPower: this.state.buyingPower,
        });
      }
    };
    xhr.open("GET", url, true);
    xhr.send(null);
  }

  render() {
    return (
      <div className="col-12 col-lg-6 justify-content-md-center mt-5">
        <h2 className="text-white text-center">
          Portfolio | Buying power: ${this.state.buyingPower}
        </h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th></th>
              <th>Ticker</th>
              <th>Amount</th>
              <th>Cost basis</th>
              <th>Stock price</th>
              <th>Return</th>
            </tr>
          </thead>
          <tbody>
            {this.state.positions.map((position) => (
              <PortfolioStock
                key={position.asset_id}
                position={position}
                loadPositions={this.loadPositions}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Portfolio;
