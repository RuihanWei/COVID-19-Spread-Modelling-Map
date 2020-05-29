import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import { thistle } from 'color-name';


// type State = {
//   lat: number,
//   lng: number,
//   zoom: number,
//   data: json,
// }

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      geo_data: require('./data/simplified_canada_provinces.json'),
      data: require('./data/data.json'),
      lat: 43.651,
      lng: -79.347,
      zoom: 4,
    };
  }

  generatePopup(place){
    return "Forcasted Daily confirmed: "+this.state.data[place]["medians"]["daily confirmed"][0]+"<br>"+
          this.state.data[place]["forecast_start"];
  }

  onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
      switch (feature.properties.name){
        case "British Columbia":
          layer.bindPopup(this.generatePopup.call(this, "British Columbia"));
          break;
        
        case "Ontario":
          layer.bindPopup(this.generatePopup.call(this, "Ontario"));
          break;
      }
    }
  }

  render(){
    const position = [this.state.lat, this.state.lng]

    return (
      <Map center={position} zoom={this.state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <GeoJSON key={"tempkey"} data={this.state.geo_data} onEachFeature={this.onEachFeature.bind(this)} />
    </Map>
    )
  }
}

export default App;
