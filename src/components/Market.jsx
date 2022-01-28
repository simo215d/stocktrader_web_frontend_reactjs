import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class Market extends Component {
  render() {
    return (
      <div className="row justify-content-md-center mt-5">
        <div className="col-6">
          <h1 class="text-white text-center">Market</h1>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th></th>
                <th>#</th>
                <th>Ticker</th>
                <th>Stock price</th>
                <th>YTD change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary m-1">
                    Buy
                  </button>
                </td>
                <td>1</td>
                <td>MSFT</td>
                <td>300</td>
                <td>-15%</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Market;
