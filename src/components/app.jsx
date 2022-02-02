import React, { Component } from "react";
import FlatList from "./flat_list";
import GoogleMapReact from 'google-map-react';
import Marker from "./marker";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markerLat: null,
      markerLng: null
    };
  }

  setMarker = (lat, lng) => {
    this.setState({
      markerLat: lat,
      markerLng: lng
    });
  }

  render() {
    return (
      <div>
        <FlatList setMarker={this.setMarker} />
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={{ lat: 10.99835602, lng: 77.01502627}}
          defaultZoom={11}
          >
            <Marker
              lat={this.state.markerLat}
              lng={this.state.markerLng}
            />
          </GoogleMapReact>
        </div>

      </div>
    );
  }
}


export default App;
