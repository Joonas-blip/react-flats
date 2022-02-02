import React, { Component } from "react";

class Flat extends Component {
  render() {
    const image = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.apartment.imageUrl}')`;
    return (
    <div className="card" style={{backgroundImage: image}}>
        <div className="card-category">{this.props.apartment.price} {this.props.apartment.priceCurrency}</div>
      <div className="card-description">
          <h2>{this.props.apartment.name}</h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
    )
  }
}

export default Flat;
