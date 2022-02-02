import React, { Component } from "react";
import FlatList from "./flat_list";
import GoogleMapReact from 'google-map-react';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList />
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={{lat: 10.99835602, lng: 77.01502627}}
          defaultZoom={11}
          >
            <Marker />
          </GoogleMapReact>
        </div>

      </div>
    );
  }
}


export default App;
