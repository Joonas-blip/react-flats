import React, { Component } from "react";
import Flat from "./flat";
import flats from "../../data/flats";

class FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flatsList: flats
    };
  }

  render() {
    return (
      <div className="flat-list">
        {this.state.flatsList.map(flat => {
          return <Flat apartment= {flat} key={flat.name} />
        })}
      </div>
    );
  }
}

export default FlatList;
