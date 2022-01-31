import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import PortfolioStock from "./PortfolioStock";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { positions: [] };
    this.loadPositions = this.loadPositions.bind(this);
  }

  //this is called after the component is rendered in DOM tree, since we cant update state inside constructor
  componentDidMount() {
    this.loadPositions();
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
        });
      }
    };
    xhr.open("GET", url, true);
    xhr.send(null);
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
