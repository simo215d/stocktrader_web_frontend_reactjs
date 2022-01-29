import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import PortfolioStock from "./PortfolioStock";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { positions: this.loadPositions() };
    this.loadPositions = this.loadPositions.bind(this);
    this.loadPositions();
  }

  loadPositions() {
    const loadedPositions = [
      {
        asset_id: "b6d1aa75-5c9c-4353-a305-9e2caa1925ab",
        symbol: "MSFT",
        exchange: "NASDAQ",
        asset_class: "us_equity",
        asset_marginable: true,
        qty: "1",
        avg_entry_price: "297.25",
        side: "long",
        market_value: "308.87",
        cost_basis: "297.25",
        unrealized_pl: "11.62",
        unrealized_plpc: "0.0390916736753574",
        unrealized_intraday_pl: "11.62",
        unrealized_intraday_plpc: "0.0390916736753574",
        current_price: "308.87",
        lastday_price: "308.26",
        change_today: "0.0019788490235515",
      },
    ];
    this.setState({
      positions: loadedPositions,
    });
    return loadedPositions;
  }

  render() {
    return (
      <div className="row justify-content-md-center mt-5">
        <div className="col-6">
          <h1 className="text-white text-center">Portfolio</h1>
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
      </div>
    );
  }
}

export default Portfolio;
