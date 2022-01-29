import React, { Component } from "react";

class Market extends Component {
  render() {
    return (
      <div className="row justify-content-md-center mt-5">
        <div className="col-3 justify-content-center d-flex flex-column">
          <h1 className="text-white text-center">Market</h1>
          {/*<form className="">
            <div className="form-group">
              <label className="text-white">Search for a stock:</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter stock symbol"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">
              Search
            </button>
            <div className="card text-center mt-4 mb-5">
              <div className="card-header">Result</div>
              <div className="card-body">
                <h5 className="card-title">Microsoft</h5>
                <p className="card-text">
                  Symbol: MSFT <br />
                  Price: 300$
                </p>
                <form className="form-inline">
                  <div className="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" className="sr-only">
                      Buy the stock
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword2"
                      placeholder="Quantity"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mb-2">
                    Place market order
                  </button>
                </form>
              </div>
            </div>
    </form>*/}
        </div>
      </div>
    );
  }
}

export default Market;
